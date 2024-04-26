import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUserAction } from './actions';
import { LoginUserType } from '@/utils/validation';

export const useUserLogin = () => {
  // const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginUserType) => loginUserAction(data),
    onSuccess: (data) => {
      console.log(data);
      // localStorage.set('accessToken', data.token);
      // setAuthorizationHeader(data.token);
      // queryClient.removeQueries();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutate, isPending };
};
