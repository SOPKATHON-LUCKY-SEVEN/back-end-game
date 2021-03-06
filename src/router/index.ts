import { Router } from "express";
import UserRouter from "./UserRouter";
import LetterRouter from "./LetterRouter";

const router: Router = Router();

/**
 * Router url Mapping Logic
 *
 * router.use('/example', ExampleRouter)
 */
router.use("/letter", LetterRouter);
router.use('/user', UserRouter);

export default router;
