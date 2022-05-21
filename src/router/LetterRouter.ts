import { Router } from "express";
import { LetterController } from "../controller";

const router: Router = Router();

router.post("/", LetterController.createLetter);
router.get("/:userId", LetterController.getLetters);

export default router;
