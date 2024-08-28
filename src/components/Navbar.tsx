import { darker_grotesque } from "@/font";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex w-[100%] py-[1rem] px-[2rem]">
      <h1
        className={cn(
          darker_grotesque.className,
          "font-semibold text-[1.4rem]"
        )}
      >
        CND Book
      </h1>
      <div className="flex gap-10 items-center ml-auto mr-[2rem]">
        <a href="/" className="text-[0.9rem]">
          Home
        </a>
        <a href="/" className="text-[0.9rem]">
          Dashboard
        </a>
        <a href="/" className="text-[0.9rem]">
          Organisations
        </a>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <a href="/login">
            <Button>Login</Button>
          </a>
        </SignedOut>
      </div>
    </nav>
  );
}
