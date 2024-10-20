import { useMutation, useQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { isAuthenticatedAtom, userAtom } from "../lib/authAtoms";
import { useRouter } from "next/navigation";

const login = async (
  email: string,
  password: string
): Promise<{ token: string; username: string; id: string }> => {
  const response = await fetch("http://localhost:5266/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  console.log("Login success", data);
  return data;
};

const useLogin = () => {
  const setUserSession = useSetAtom(userAtom);
  const setIsAtuhenticated = useSetAtom(isAuthenticatedAtom);
  const router = useRouter();
  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const response = login(credentials.email, credentials.password);
      return response;
    },
    onSuccess: (response) => {
      if (response.token && response.username) {
        setUserSession({
          token: response.token,
          name: response.username,
          id: response.id,
        });
        setIsAtuhenticated(true);
      }
      router.push("/shop");
    },
    onError: () => {
      console.log("Login failed");
    },
  });
};

export { useLogin };
