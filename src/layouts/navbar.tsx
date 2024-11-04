import { Link, useNavigate } from "react-router-dom";
import ReactLogo from "../assets/react.svg";
import { useStorage } from "../hooks/useStorage";
import { useEffect } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const { value, remove } = useStorage("token");

  useEffect(() => {
    if (!value) {
      navigate("/auth");
    }
  }, [navigate, value]);

  return (
    <nav className="w-full h-16 flex justify-between fixed top-0 left-0 px-8 py-4">
      <div className="flex items-center gap-2">
        <img
          src={ReactLogo}
          alt="Wanted pre onboarding fe 27"
          className="object-contain aspect-square"
        />
        <span className="flex-shrink-0">TODO</span>
      </div>

      <div className="flex gap-4 items-center">
        {value ? (
          <button
            className="px-4 py-1 bg-blue-600 hover:bg-blue-400 text-white"
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
