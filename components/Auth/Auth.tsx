"use client";

import { useSupabase, VIEWS } from "@components/index";
import Login from "./Login";
import UpdatePwd from "./UpdatePwd";

const Auth = () => {
  let { view } = useSupabase();

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <UpdatePwd />;
  }

  return <Login />;
};

export default Auth;
