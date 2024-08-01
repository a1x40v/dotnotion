import { useMutation } from '@tanstack/react-query';
import apiClient from '../axios';
import { useBoundStore } from '../store/store';
import { ProblemDetails } from '../types';

interface AuthParams {
  email: string;
  password: string;
}

interface AuthResponse {
  userId: string;
  jwtToken: string;
}

const authenticate = async (
  url: string,
  authParams: AuthParams
): Promise<AuthResponse> => {
  const response = await apiClient.post(url, authParams);
  const storeLogin = useBoundStore.getState().login;
  storeLogin(response.data.userId, response.data.jwtToken);

  return response.data;
};

export const useLogin = () => {
  return useMutation<AuthResponse, ProblemDetails, AuthParams>({
    mutationFn: (authParams: AuthParams) =>
      authenticate('/accounts/login', authParams),
  });
};

export const useSignUp = () => {
  return useMutation<AuthResponse, ProblemDetails, AuthParams>({
    mutationFn: (authParams: AuthParams) =>
      authenticate('/accounts/signup', authParams),
  });
};
