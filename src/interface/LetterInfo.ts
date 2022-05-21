import { UserInfo } from "./UserInfo";

export interface LetterInfo {
  content: string;
  sender: string;
  receiver: UserInfo;
}
