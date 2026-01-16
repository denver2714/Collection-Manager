// DeleteUserComponent.tsx
"use client";

import * as actions from "@/actions/action";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
    <Button
      onClick={handleDelete}
      variant="destructive"
      size="sm"
      className="cursor-pointer"
    >
      Delete
    </Button>
  );
};

export default DeleteUserComponent;
