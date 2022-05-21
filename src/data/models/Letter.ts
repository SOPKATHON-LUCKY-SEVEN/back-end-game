import mongoose from "mongoose";
import { LetterInfo } from "../../interface/LetterInfo";

const LetterSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default mongoose.model<LetterInfo & mongoose.Document>(
  "Letter",
  LetterSchema
);
