import { auth } from "@lib/firebase.js";
import { useEffect } from "react";
import { useRouter } from "next/router";

const useRequireAuth = (redirectUrl = "/signup") => {
  const router = useRouter();
  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (!auth.currentUser) {
      router.push(redirectUrl);
    }
  }, [router, redirectUrl]);
  return auth;
};
