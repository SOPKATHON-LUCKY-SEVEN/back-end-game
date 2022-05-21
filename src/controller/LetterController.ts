import { Request, Response } from "express";
import LetterCreateDto from "../interface/letter/LetterCreateDto";
import { LetterService } from "../service";
import BaseResponse from "../util/BaseResponse";
import message from "../util/message";
import statusCode from "../util/statusCode";

const createLetter = async (req: Request, res: Response) => {
  const letterCreateDto: LetterCreateDto = req.body;

  try {
    const data = await LetterService.createLetter(letterCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        BaseResponse.success(
          statusCode.CREATED,
          message.CREATE_LETTER_SUCCESS,
          data
        )
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        BaseResponse.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const getLetters = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const data = await LetterService.getLetters(userId);
    res
      .status(statusCode.OK)
      .send(
        BaseResponse.success(statusCode.OK, message.READ_LETTER_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        BaseResponse.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  createLetter,
  getLetters,
};
