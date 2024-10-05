import { ReactNode } from "react";
import Navbar from "../components/organisms/Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="bg-neutral-950">
      <Navbar />

      <main className="grid grid-cols-12 w-full">
        <section className="col-span-9 p-8">{children}</section>
        <aside className="col-span-3 h-screen sticky"></aside>
      </main>
    </div>
  );
}
