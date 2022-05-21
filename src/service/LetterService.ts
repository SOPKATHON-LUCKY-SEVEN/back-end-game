import Letter from "../data/models/Letter";
import LetterCreateDto from "../interface/letter/LetterCreateDto";
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

export default { createLetter };
