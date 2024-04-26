import { LoginUserType } from '@/utils/validation';
import axios, { AxiosError } from 'axios';

export const loginUserAction = async (loginData: LoginUserType) => {
  try {
    const { data } = await axios.post(
      'http://localhost:3001/api/auth/login',
      loginData
    );

    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) throw error.response?.data.message;
    throw 'Se ha producido un error';
  }
};
