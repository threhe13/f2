import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";

export function RootLayout() {
  return (
    <main className="w-full max-h-svh overflow-hidden">
      <Navbar />
      <div className="w-full h-full pt-16">
        <Outlet />
      </div>
    </main>
  );
}
