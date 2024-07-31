import { useMutation } from '@tanstack/react-query';
import apiClient from '../axios';
import { useBoundStore } from '../store/store';
import { ProblemDetails } from '../types';

interface LoginParams {
  email: string;
  password: string;
}

interface AuthResponse {
  userId: string;
  jwtToken: string;
}

const login = async (loginParams: LoginParams): Promise<AuthResponse> => {
  const response = await apiClient.post('/accounts/login', loginParams);
  const storeLogin = useBoundStore.getState().login;
  storeLogin(response.data.userId, response.data.jwtToken);

  return response.data;
};

export const useLogin = () => {
  return useMutation<AuthResponse, ProblemDetails, LoginParams>({
    mutationFn: login,
  });
};
