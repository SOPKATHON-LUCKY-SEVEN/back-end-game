import mongoose from "mongoose";
import { UserInfo } from "../../interface/UserInfo";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  letters: [
    {
      letter: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Letter",
      },
    },
  ],
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);
