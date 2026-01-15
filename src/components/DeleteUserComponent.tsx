// DeleteUserComponent.tsx
"use client";

import * as actions from "@/actions/action";
import { useRouter } from "next/navigation";

const DeleteUserComponent = ({ uuid }: { uuid: string }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await actions.deleteUser(uuid);
    } catch (error) {
      console.error("Error deleting user:", error);
    }

    router.back();
  };

  return (
    <button
      onClick={handleDelete}
      className="px-2 rounded-lg border cursor-pointer hover:bg-black hover:text-white transition"
    >
      Delete
    </button>
  );
};

export default DeleteUserComponent;
