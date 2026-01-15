"use client";
import { useRouter } from "next/navigation";
const BackButtonUserComponent = () => {
  const router = useRouter();
  return (
    <div>
      <button
        type="button"
        onClick={() => router.back()}
        className="cursor-pointer rounded-xl border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
      >
        Back
      </button>
    </div>
  );
};

export default BackButtonUserComponent;
