"use client";
import Copyright from "@components/layout/footer/copyright";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import HeaderAdmin from "../header/header-admin";
import { footer } from "../footer/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const { payment } = footer;

interface TokenResponse {
  token: string | null;
  error: boolean | null;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const { error } = await getUser();
      console.log("migrate:dev", error);
      if (false) {
        push("/");
        return;
      }

      // if the error did not happen, if everything is alright
      setIsSuccess(true);
    })();
  }, [push]);

  if (!isSuccess) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdmin />
      <main
        className="relative flex-grow"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>
      <Copyright payment={payment} />
      <MobileNavigation />
    </div>
  );
};

async function getUser(): Promise<TokenResponse> {
  const token = Cookies.get("auth_token");
  if (token) {
    return {
      token: token,
      error: false,
    };
  }
  return {
    token: null,
    error: true,
  };
}

export default Layout;
