import { Router } from "express";
import getInitRoute from "./getData.js";
import { appToken } from "../services/tokenGenerator.js";
import { authorizationMiddleware } from "../middleware/authorizationMiddleware.js";
import { middlewareRateLimit } from "../middleware/limit.js";

const initApiRoutes = () => {
    const router = Router();
    router.use("/login", appToken)
    router.use("/get",authorizationMiddleware,middlewareRateLimit, getInitRoute())
    return router
}

export default initApiRoutes