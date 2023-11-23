"use client";
import React from "react";
import LoginInputs from "@/common/components/ui/LoginInputs";
import AuthWrapper from "@/common/components/ui/AuthWrapper";
import useAuthModalStore from "@/common/store/useAuthModalStore";
import SignupInputs from "@/common/components/ui/SignupInputs";

const Login = () => {
  const isLogin = useAuthModalStore((state:any)=>state.isLogin)
  const closable = useAuthModalStore((state:any)=>state.closable)
  console.log(isLogin)
  return (
    <AuthWrapper title="Login or sign up" closable={closable} isLoggedIn={isLogin}>
      {isLogin ?(<LoginInputs />):(<SignupInputs />)}
    </AuthWrapper>
  );
};

export default Login;
