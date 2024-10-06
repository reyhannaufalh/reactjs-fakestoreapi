import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";

interface User extends JwtPayload {
  user?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const decodedUser = jwtDecode<User>(token);
    console.log("User:", decodedUser);
    setUser(decodedUser);
  }, []);

  return user;
};

export const useLogout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const token = localStorage.getItem("token");

  if (token) return false;

  return true;
};
