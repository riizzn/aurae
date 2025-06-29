"use client";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        auraeId: 0,
        auraeCard: "",
      }}
      onSubmit={() => {}}
    />
  );
};

export default Page;
