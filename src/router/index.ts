import { Router } from "express";
import LetterRouter from "./LetterRouter";

const router: Router = Router();

/**
 * Router url Mapping Logic
 *
 * router.use('/example', ExampleRouter)
 */
router.use("/letter", LetterRouter);

export default router;
