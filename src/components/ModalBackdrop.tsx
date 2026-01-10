"use client";

import { useRouter } from "next/navigation";

import React from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

const ModalBackdrop = ({ children }: ChildrenProps) => {
  const router = useRouter();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) router.back();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center p-6 bg-black/60 cursor-pointer"
    >
      {children}
    </div>
  );
};

export default ModalBackdrop;
