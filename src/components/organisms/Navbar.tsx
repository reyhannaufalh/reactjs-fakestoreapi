import { Link } from "react-router-dom";
import Button from "../atoms/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 mx-auto text-white container-fluid">
      <Link to={"/"} className="text-xl font-semibold">
        FakeStoreAPI
      </Link>

      <div className="flex items-center gap-3">
        <Button href={"/login"} as="link">
          Login
        </Button>
      </div>
    </nav>
  );
}
