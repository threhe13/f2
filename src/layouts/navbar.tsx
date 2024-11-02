import { Link, useNavigate } from "react-router-dom";
import ReactLogo from "../assets/react.svg";
import { useStorage } from "../hooks/useStorage";
import { useEffect } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const { value, remove } = useStorage("token");

  useEffect(() => {
    // 유효하지 않은 기준을 잘못된 토큰 값이라 생각하여 설정이 되어있지 않은 경우 메인페이지를 보여주고
    // 토큰의 key는 존재하지만 값이 존재하지 않는 경우만 유효하지 않은 경우라 가정
    if (value === undefined) return;
    if (value.length === 0) {
      navigate("/auth");
    }
  }, [navigate, value]);

  return (
    <nav className="w-full flex justify-between fixed top-0 left-0 px-8 py-4">
      <div className="flex items-center gap-2">
        <img
          src={ReactLogo}
          alt="Wanted pre onboarding fe 27"
          className="object-contain aspect-square"
        />
        <span className="flex-shrink-0">React + Vite + React Router v6</span>
      </div>

      <div className="flex gap-4 items-center">
        {value ? (
          <button
            className="px-4 py-1 bg-blue-500 hover:bg-blue-400 text-white"
            onClick={remove}
          >
            로그아웃
          </button>
        ) : (
          <Link to="auth">
            <button className="px-4 py-1 bg-blue-500 hover:bg-blue-400 text-white">
              로그인
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
