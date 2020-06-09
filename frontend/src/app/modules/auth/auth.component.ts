import {Component, HostBinding, OnInit} from "@angular/core";
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {EMPTY} from "rxjs";
import {catchError, finalize, tap} from "rxjs/operators";
import {defaultAbsoluteRoute} from "../../app-routers";
import {SPQNavigationService} from "../../services/navigation.service";
import {SPQAuthService} from "./services/auth.service";

// TODO: big refactoring!
@Component({
    selector: "spq-auth",
    templateUrl: "auth.component.html",
    providers: [
        SPQAuthService
    ]
})
export class SPQAuthComponent implements OnInit {

    public _loading: boolean = false;

    public _loginForm: FormGroup;

    public _loginMessage: string = "";

    public _registrationForm: FormGroup;

    public _registrationMessage: string = "";

    @HostBinding("class.spq-auth")
    private hostClass: boolean = true;

    constructor(private authService: SPQAuthService,
                private navigationService: SPQNavigationService) {
    }

    public ngOnInit() {
        this.createLoginForm();
        this.createRegistrationForm();
        this.subscribeToLogoutIfLogged();
    }

    public onValidRegisterClick(): void {
        this._loading = true;
        this._registrationMessage = "";
        this.authService.attemptRegistration({
            login: this._registrationForm.value["login"],
            password: this._registrationForm.value["password"],
            email: this._registrationForm.value["email"],
            firstName: this._registrationForm.value["firstName"],
        })
            .pipe(
                tap(
                    (response) => {
                        this.authService.decodeResponseTokenAndSetToStore(response);
                        this.navigationService.navigateTo(defaultAbsoluteRoute);
                    },
                    () => {
                        this._registrationForm.setErrors({
                            password: "Error"
                        });
                    }
                ),
                catchError(err => {
                    this._registrationMessage = err.error.error;
                    return EMPTY;
                }),
                finalize(() => {
                    this._loading = false;
                })
            )
            .subscribe();
    }

    public onValidLoginClick(): void {
        this._loading = true;
        this._loginMessage = "";
        this.authService.attemptAuthentication({
            login: this._loginForm.value["login"],
            password: this._loginForm.value["password"],
        })
            .pipe(
                catchError(err => {
                    this._loginMessage = err.error.error;
                    return EMPTY;
                }),
                finalize(() => {
                    this._loading = false;
                })
            )
            .subscribe(
                (response) => {
                    this.authService.decodeResponseTokenAndSetToStore(response);
                    this.navigationService.back();
                },
                () => {
                    this._loginForm.setErrors({
                        password: "Error"
                    });
                }
            );
    }

    private createLoginForm(): void {
        this._loginForm = new FormGroup({
            login: new FormControl("", this.getValidatorsForFields()),
            password: new FormControl("", this.getValidatorsForFields()),
        });
    }

    private createRegistrationForm(): void {
        this._registrationForm = new FormGroup({
            firstName: new FormControl("", [Validators.required, Validators.min(2)]),
            login: new FormControl("", this.getValidatorsForFields()),
            email: new FormControl("", [...this.getValidatorsForFields(), Validators.email]),
            password: new FormControl("", this.getValidatorsForFields()),
        });
    }

    private subscribeToLogoutIfLogged(): void {
        this.authService.logoutIfLogged()
            .subscribe();
    }

    private getValidatorsForFields(): ValidatorFn[] {
        return [Validators.required, Validators.min(5)];
    }

    public getErrorMessage(): string {
        return "Введены некорректные данные!";
    }
}
