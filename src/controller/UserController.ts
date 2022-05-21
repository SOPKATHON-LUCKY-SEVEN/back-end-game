import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import BaseResponse from "../util/BaseResponse";
import { PostBaseResponseDto } from "../util/PostBaseResponseDto";
import statusCode from "../util/statusCode";
import message from "../util/message";
import { UserCreateDto } from "../interface/user/UserCreateDto";
import { UserService } from "../service";
import User from "../data/models/User";

/**
 *  @route POST /user
 *  @desc Create User
 *  @access Public
 */

const createUser = async (req: Request, res: Response) => {
    const userCreateDto: UserCreateDto = req.body;

    try {
        const user: PostBaseResponseDto | null = await UserService.createUser(userCreateDto);
        
        if (!user) return res.status(statusCode.CONFLICT).send(BaseResponse.fail(statusCode.CONFLICT, message.DUPLICATED));

        const data = {
            _id: user._id
        };

        res.status(statusCode.CREATED).send(BaseResponse.success(statusCode.CREATED, message.CREATE_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(BaseResponse.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route GET /user/:userId
 *  @desc READ User
 *  @access Public
 */

 const getUsers = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const data = await UserService.getUsers(userId);

        res.status(statusCode.OK).send(BaseResponse.success(statusCode.OK, message.READ_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(BaseResponse.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}


export default {
    createUser,
    getUsers
}