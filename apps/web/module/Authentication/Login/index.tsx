"use client";
import React from "react";
import LoginInputs from "@/common/components/ui/LoginInputs";
import AuthWrapper from "@/common/components/ui/AuthWrapper";

const Login = () => {
  return (
    <AuthWrapper title="Login or sign up" closable={false} isLoggedIn={true}>
      <LoginInputs />
    </AuthWrapper>
  );
};

export default Login;
