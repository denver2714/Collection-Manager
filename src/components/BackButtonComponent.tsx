"use client";
import { useRouter } from "next/navigation";

const BackButtonComponent = () => {
  const router = useRouter();
  return (
    <div className="p-2">
      <button
        onClick={() => router.back()}
        type="button"
        className="p-2 rounded-lg border border-red-500 text-red-500  hover:bg-red-500 hover:text-white transition cursor-pointer"
      >
        Back
      </button>
    </div>
  );
};

export default BackButtonComponent;
