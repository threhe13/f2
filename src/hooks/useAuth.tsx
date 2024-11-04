import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStorage } from "./useStorage";
import { createUser, loginUser } from "../libs/auth";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";

type AuthResponse = {
  message: string;
  token: string;
  details: string;
};

export const useAuth = () => {
  const navigate = useNavigate();
  const { set } = useStorage("token");
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (formState: { email: string; password: string }) => {
    setIsError("");
    setIsLoading(true);
    loginUser(formState.email, formState.password)
      .then((res: AxiosResponse<Omit<AuthResponse, "details">>) => {
        set(res.data.token);
        setIsLoading(false);
        navigate("/");
      })
      .catch((err: AxiosError<Omit<AuthResponse, "message" | "token">>) => {
        if (isAxiosError(err)) {
          const detailError = err.response?.data.details as string;
          setIsError(detailError);
        } else {
          setIsError("서버에 문제가 발생했습니다.");
        }
        setIsLoading(false);
      });
  };

  const create = async (formState: { email: string; password: string }) => {
    setIsError("");
    setIsLoading(true);
    createUser(formState.email, formState.password)
      .then((res: AxiosResponse<Omit<AuthResponse, "details">>) => {
        set(res.data.token);
        setIsLoading(false);
      })
      .catch((err: AxiosResponse<Omit<AuthResponse, "message" | "token">>) => {
        if (isAxiosError(err)) {
          const detailError = err.response?.data.details as string;
          setIsError(detailError);
        } else {
          setIsError("서버에 문제가 발생했습니다.");
        }
        setIsLoading(false);
      });
  };

  return { login, create, isError, isLoading };
};
