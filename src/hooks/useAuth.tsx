import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStorage } from "./useStorage";
import { createUser, loginUser } from "../libs/auth";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

type AuthResponse = {
  message: string;
  token: string;
  details: string;
};

export const useAuth = () => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { set } = useStorage("token");

  const loginMutation = useMutation({
    mutationFn: (formState: { email: string; password: string }) =>
      loginUser(formState.email, formState.password),
    onMutate: () => {
      setIsError("");
      setIsLoading(true);
    },
    onSuccess: (res: AxiosResponse<Omit<AuthResponse, "details">>) => {
      const token = res.data.token;
      set(token);

      navigate("/");
    },
    onError: (err: AxiosError<Omit<AuthResponse, "message" | "token">>) => {
      if (isAxiosError(err)) {
        const errorResponse = err.response as AxiosResponse;
        const detailError = errorResponse.data.details as string;
        setIsError(detailError);
      } else {
        setIsError("서버에 문제가 발생했습니다.");
      }
      setIsLoading(false);
    },
  });

  const createMutation = useMutation({
    mutationFn: (formState: { email: string; password: string }) =>
      createUser(formState.email, formState.password),
    onMutate: () => {
      setIsError("");
      setIsLoading(true);
    },
    onSuccess: (res: AxiosResponse<Omit<AuthResponse, "details">>) => {
      const token = res.data.token;
      set(token);

      navigate("/");
    },
    onError: (err: AxiosError<Omit<AuthResponse, "message" | "token">>) => {
      if (isAxiosError(err)) {
        const errorResponse = err.response as AxiosResponse;
        const detailError = errorResponse.data.details as string;
        setIsError(detailError);
      } else {
        setIsError("서버에 문제가 발생했습니다.");
      }
      setIsLoading(false);
    },
  });

  const login = async (formState: { email: string; password: string }) => {
    loginMutation.mutate(formState);
  };

  const create = async (formState: { email: string; password: string }) => {
    createMutation.mutate(formState);
  };

  return { login, create, isError, isLoading };
};
