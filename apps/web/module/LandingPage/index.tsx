"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import AuthWrapperModal from "@/common/components/ui/AuthWrapperModal";
import LoginInputs from "@/common/components/ui/LoginInputs";
import useAuthModalStore from "@/common/store/useAuthModalStore";

function LandingPage() {
  const [authWrapperModal, setAuthWrapperModal] = useState<boolean>(false);
  const isLogin = useAuthModalStore((state: any) => state.isLogin);

  return (
    <>
      <Header />
      <div>Content</div>
      <AuthWrapperModal
        isOpen={authWrapperModal}
        onClose={() => setAuthWrapperModal(false)}
        isLoggedIn={isLogin}
        title="Log in or Sign up"
      >
        <LoginInputs />
      </AuthWrapperModal>
    </>
  );
}

export default LandingPage;
