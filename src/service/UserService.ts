import { PostBaseResponseDto } from "../util/PostBaseResponseDto";
import { UserCreateDto } from "../interface/user/UserCreateDto";
import User from "../data/models/User";

const createUser= async (userCreateDto: UserCreateDto): Promise<PostBaseResponseDto | null> => {
  try {
    const existUser = await User.findOne({
        phoneNumber: userCreateDto.phoneNumber
    });
    if (existUser) return null;

    const user = new User ({
        name: userCreateDto.name,
        phoneNumber: userCreateDto.phoneNumber
    });

    await user.save();

    const data = {
      _id: user._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { createUser };
