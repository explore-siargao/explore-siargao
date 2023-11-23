"use client";
import React, { useState } from "react";
import LoginInputs from "@/common/components/ui/LoginInputs";
import AuthWrapper from "@/common/components/ui/AuthWrapper";
import SignupInputs from "@/common/components/ui/SignupInputs";

const Login = () => {
  const [modalState, setModalState] = useState(0);

  const renderLoginSignup = () => {
    return (
      <AuthWrapper title="Login or sign up" closable={false} isLoggedIn={true}>
        <LoginInputs modalState={modalState} />
      </AuthWrapper>
    );
  };
  const renderContinueWithEmail = () => {
    return (
      <AuthWrapper title="Sign up" closable={false} isLoggedIn={false}>
        <SignupInputs modalState={modalState} />
      </AuthWrapper>
    );
  };
  return (
    <>{modalState === 0 ? renderLoginSignup() : renderContinueWithEmail()}</>
  );
};

export default Login;
