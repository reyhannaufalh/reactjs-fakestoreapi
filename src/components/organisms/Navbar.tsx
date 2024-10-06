import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSort } from "../../redux/slices/sortSlice";
import { useAuth, useLogout } from "../../hooks/useAuth";

export default function Navbar() {
  const user = useAuth();

  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.sort.sort);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value));
  };

  const handleLogout = () => {
    const logout = useLogout();

    if (logout) {
      alert("Logged out successfully");
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 mx-auto text-white container-fluid">
      <Link to="/" className="text-xl font-semibold">
        FakeStoreAPI
      </Link>

      <div className="flex items-center gap-3">
        <Input
          placeholder="Search products"
          id="search"
          className="w-full max-w-xl"
          name="search"
        />

        <select
          className="px-4 py-3 rounded-md bg-neutral-800"
          name="sort"
          id="sort"
          value={sort}
          onChange={handleSortChange}
        >
          <option value="all">All</option>
          <option value="desc">Newest</option>
          <option value="asc">Oldest</option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <div className="flex items-center justify-center gap-4">
            <p className="font-semibold">{user.user}</p>

            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Button href="/register" as="link">
            Register
          </Button>
        )}
      </div>
    </nav>
  );
}
