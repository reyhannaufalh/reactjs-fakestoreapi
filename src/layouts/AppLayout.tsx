import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="bg-neutral-950">
      <nav>
        <Link to={"/"}>FakeStoreAPI</Link>

        <div className="flex gap-3 items-center">
          <Link to={"/login"}>Login</Link>
        </div>
      </nav>
      <main className="grid grid-cols-12 w-full">
        <section className="col-span-8">{children}</section>
        <aside className="col-span-4 bg-neutral-100 h-screen sticky"></aside>
      </main>
    </div>
  );
}
