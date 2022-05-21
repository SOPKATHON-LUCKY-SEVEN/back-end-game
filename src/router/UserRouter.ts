import { Router } from "express";
import UserController from "../controller/UserController";

const router: Router = Router();

router.post('/', UserController.createUser);
router.get('/:userId', UserController.getUsers);

export default router;