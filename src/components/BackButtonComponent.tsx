"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackButtonComponent = () => {
  const router = useRouter();
  return (
    <div className="p-2">
      <Button onClick={() => router.back()} type="button" variant="outline">
        Back
      </Button>
    </div>
  );
};

export default BackButtonComponent;
