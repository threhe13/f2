import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/form/login";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { SignupForm } from "../components/form/signup";
import { useStorage } from "../hooks/useStorage";

export function AuthTemplate() {
  const navigate = useNavigate();
  const { value } = useStorage("token");
  const [currentAuth, setCurrentAuth] = useState<"login" | "signup">("login");

  const changeCurrentAuth = useCallback((currentAuth: "login" | "signup") => {
    setCurrentAuth(currentAuth);
  }, []);

  useEffect(() => {
    if (value) {
      navigate("/");
    }
  }, [navigate, value]);

  return (
    <main className="w-full h-full grid grid-cols-2">
      <div className="w-full h-full min-h-svh overflow-hidden p-2">
        <img
          src="https://images.unsplash.com/photo-1474354503580-955e733d2a7d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Auth Page Image"
          loading="lazy"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="relative w-full flex flex-col justify-center items-center">
        <div className="absolute top-8 left-8 p-8 z-10 text-blue-600">
          <Link to="/">&larr; Back to home</Link>
        </div>

        <div className="w-full flex flex-row flex-nowrap justify-center items-center transition-all overflow-hidden">
          <div className={cn("w-full max-w-80 overflow-hidden flex flex-row")}>
            <div className="flex flex-row">
              <section className="w-80">
                <div
                  className={cn(
                    "w-full flex flex-col items-center gap-8 transition-all",
                    currentAuth === "login"
                      ? "translate-x-0"
                      : "-translate-x-80"
                  )}
                >
                  <h1>Login</h1>
                  <LoginForm />
                  <div className="flex items-center gap-2">
                    <span>아직 회원이 아니신가요?</span>
                    <button
                      className="text-blue-800"
                      onClick={() => changeCurrentAuth("signup")}
                    >
                      회원가입하기
                    </button>
                  </div>
                </div>
              </section>

              <section className="w-80">
                <div
                  className={cn(
                    "w-full flex flex-col items-center gap-8 transition-all",
                    currentAuth === "login"
                      ? "translate-x-0"
                      : "-translate-x-80"
                  )}
                >
                  <h1>Sign Up</h1>
                  <SignupForm />
                  <div>
                    <span>이미 회원이신가요?</span>
                    <button
                      className="text-blue-800 gap-2"
                      onClick={() => changeCurrentAuth("login")}
                    >
                      로그인하기
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
