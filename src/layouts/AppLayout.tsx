import { ReactNode } from "react";
import Navbar from "../components/organisms/Navbar";
import { Provider } from "react-redux";
import store from "../redux/store";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <section className="text-white">{children}</section>
      </main>
    </Provider>
  );
}
