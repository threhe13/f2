import { Navbar } from "./navbar";

interface IRootLayout {
  children: React.ReactNode;
}

export function RootLayout({ children }: IRootLayout) {
  return (
    <main className="w-full max-h-svh">
      <Navbar />
      {/* TODO: Navbar */}
      {children}
    </main>
  );
}
