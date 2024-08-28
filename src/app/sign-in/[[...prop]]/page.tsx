import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Login() {
  return (
    <main className="flex w-[100%] justify-center pt-[9rem]">
      <SignIn signUpUrl="/sign-up" />
    </main>
  );
}
