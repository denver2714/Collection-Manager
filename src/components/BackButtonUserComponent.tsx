"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackButtonUserComponent = () => {
  const router = useRouter();
  return (
    <Button type="button" onClick={() => router.back()} variant="outline">
      Back
    </Button>
  );
};

export default BackButtonUserComponent;
