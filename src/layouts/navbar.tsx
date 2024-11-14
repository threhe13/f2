import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import ReactLogo from "../assets/react.svg";
import { useStorage } from "../hooks/useStorage";
import { Button } from "../components/button";

export function Navbar() {
  const naviator = useNavigate();
  const { value, remove } = useStorage("token");

  const handleLogout = () => {
    alert("로그아웃 되었습니다.");
    remove();
    naviator("/auth");
  };

  useEffect(() => {
    if (!value) {
      alert("유효하지 않은 유저입니다.");
      naviator("/auth");
    }
  }, [naviator, value]);

  return (
    <nav className="w-full h-16 flex justify-between fixed top-0 left-0 px-4 py-4">
      <Link to="/" className="cursor-pointer">
        <div className="flex items-center gap-2">
          <img
            src={ReactLogo}
            alt="Wanted pre onboarding fe 27"
            className="object-contain aspect-square"
          />
          <span className="text-black">TODO</span>
        </div>
      </Link>

      <div className="flex gap-4 items-center">
        {value ? (
          <Button onClick={handleLogout}>로그아웃</Button>
        ) : (
          <Link to="auth">
            <Button onClick={handleLogout}>로그인</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
