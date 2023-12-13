import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { User } from './user.model';

const loginUser = async ({ email }: any): Promise<any | null> => {
  const token = jwtHelpers.createToken(email, process.env.JWT_SECRET, '1h');
  console.log(token);
  return token;
};
const getUser = async (): Promise<any | null> => {
  const user = User.find({});
  console.log(user);
  return user;
};
const getByUser = async (email: any): Promise<any | null> => {
  try {
    console.log(email);
    const user = await User.findOne({ email });

    if (!user) {
      console.log(`User with ID ${email} not found`);
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error; // Handle or log the error accordingly
  }
};

const signUpUser = async (body: any): Promise<any | null> => {
  try {
    console.log(body);
    const createdUser = await User.create(body);
    return createdUser;
  } catch (error) {
    console.error('Error creating sector:', error);
    return null;
  }
};

export const userService = {
  loginUser,
  getUser,
  signUpUser,
  getByUser,
};
