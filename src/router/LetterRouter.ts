import { Router } from "express";
import { body } from "express-validator";
import LetterController from "../controller/LetterController";

const router: Router = Router();

router.post(
  "/",
  [
    body("content").notEmpty(),
    body("sender").notEmpty(),
    body("receiver").notEmpty(),
  ],
  LetterController.createLetter
);

router.get("/:userId", LetterController.getLetters);

export default router;
