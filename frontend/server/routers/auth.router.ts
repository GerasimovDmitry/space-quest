import * as express from "express";
import * as mocks from "../mocks";
import {authStore} from "../mocks";

const authRouter = express.Router();
const errorAuthorization = "Error Authorization";

authRouter.post("/login", (req, res) => {
    if (authStore.login.login === req.body.login) {
        res.status(200).json(mocks.authStore.login);
    } else {
        res.status(403).json(errorAuthorization);
    }
});

authRouter.post("/registration", (req, res) => {
    res.status(200).json(mocks.authStore.registration);
});

authRouter.post("/logout", (req, res) => {
    res.status(200).json({});
});

export {authRouter};
