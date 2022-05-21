import { Router } from "express";
import UserRouter from "./UserRouter";

const router: Router = Router();

/**
 * Router url Mapping Logic
 *
 * router.use('/example', ExampleRouter)
 */

router.use('/user', UserRouter);

export default router;
