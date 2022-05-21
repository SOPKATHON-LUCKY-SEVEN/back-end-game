import Letter from "../data/models/Letter";
import LetterCreateDto from "../interface/letter/LetterCreateDto";
import LetterResponseDto from "../interface/letter/LetterResponseDto";
import { PostBaseResponseDto } from "../util/PostBaseResponseDto";

const createLetter = async (
  letterCreateDto: LetterCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const letter = new Letter(letterCreateDto);

    await letter.save();

    const data = {
      _id: letter._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getLetters = async (userId: string): Promise<LetterResponseDto[]> => {
  try {
    const letters = await Letter.find({ receiver: userId });
    const data = await Promise.all(
      letters.map((letter: any) => {
        const result = {
          content: letter.content,
          sender: letter.sender,
        };
        return result;
      })
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createLetter,
  getLetters,
};
