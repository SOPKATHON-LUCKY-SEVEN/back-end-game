import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import BaseResponse from "../util/BaseResponse";
import { PostBaseResponseDto } from "../util/PostBaseResponseDto";
import statusCode from "../util/statusCode";
import message from "../util/message";
import { UserCreateDto } from "../interface/user/UserCreateDto";
import { UserService } from "../service";


    /**
 *  @route POST /user
 *  @desc Create User
 *  @access Public
 */

const createUser = async (req: Request, res: Response) => {
    // const error = validationResult(req);
    // if (!error.isEmpty()) {
    //     return res.status(statusCode.BAD_REQUEST).send(BaseResponse.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST)); // 400 에러
    // }

    const userCreateDto: UserCreateDto = req.body;

    try {
        const user: PostBaseResponseDto | null = await UserService.createUser(userCreateDto);
        
        if (!user) return res.status(statusCode.CONFLICT).send(BaseResponse.fail(statusCode.CONFLICT, message.DUPLICATED)); // 409

        const data = {
            _id: user._id
        };

        res.status(statusCode.CREATED).send(BaseResponse.success(statusCode.CREATED, message.CREATE_USER_SUCCESS, data)); // 201
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(BaseResponse.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR)); // 500
    }
}

export default {
    createUser
}