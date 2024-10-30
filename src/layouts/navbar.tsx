import { Link } from "react-router-dom";
import ReactLogo from "../assets/react.svg";

export function Navbar() {
  return (
    <div className="w-full flex justify-between fixed top-0 left-0 px-8 py-4">
      <div className="flex items-center gap-2">
        <img
          src={ReactLogo}
          alt="Wanted pre onboarding fe 27"
          className="object-contain aspect-square"
        />
        <span className="flex-shrink-0">React + Vite + React Router v6</span>
      </div>

      <div className="flex gap-4 items-center">
        <Link to="auth">
          <button className="px-4 py-1 bg-blue-500 hover:bg-blue-400 text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
