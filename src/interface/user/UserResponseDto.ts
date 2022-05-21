import mongoose from "mongoose";
import { UserCreateDto } from "./UserCreateDto";
import { LetterInfo } from "../LetterInfo";

export interface UserResponseDto extends UserCreateDto {
    _id: mongoose.Schema.Types.ObjectId;
    letters?: LetterInfo[];
}