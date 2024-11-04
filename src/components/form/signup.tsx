import { SyntheticEvent, useMemo, useState } from "react";
import { Input } from "../input";
import { useAuth } from "../../hooks/useAuth";

type SignupFormType = {
  email: string;
  password: string;
};

export const SignupForm = () => {
  const [formState, setFormState] = useState<SignupFormType>({
    email: "",
    password: "",
  });
  const { create, isError, isLoading } = useAuth();

  const updateFormState = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.currentTarget.name;
    const value = e.currentTarget.value;
    console.log(target, value);
    setFormState((state: SignupFormType) => ({ ...state, [target]: value }));
  };

  const isDisabled: boolean = useMemo(() => {
    if (!formState.email || !formState.password) {
      return true;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex = /[\w]{8,}/g;

    if (!emailRegex.test(formState.email)) {
      console.log("wrong email");
      return true;
    }

    if (!passwordRegex.test(formState.password)) {
      console.log("wrong password");
      return true;
    }

    return false;
  }, [formState]);

  const handleSignupFormSubmit = async (
    event: SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    create(formState);
    if (!isError) setFormState({ email: "", password: "" });
  };

  return (
    <form
      className="w-full flex flex-col gap-4"
      noValidate
      onSubmit={handleSignupFormSubmit}
    >
      <Input
        required
        type="email"
        label="Email"
        name="email"
        onChange={updateFormState}
      />
      <Input
        required
        type="password"
        label="Password"
        name="password"
        onChange={updateFormState}
      />
      {isError && <span className="text-sm text-red-500">{isError}</span>}
      <button
        disabled={isDisabled || isLoading}
        type="submit"
        className="bg-blue-600 text-white hover:bg-blue-500 transition-all disabled:bg-slate-300 disabled:text-slate-600"
      >
        Submit
      </button>
    </form>
  );
};
