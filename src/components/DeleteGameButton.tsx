"use client";
import { useRouter } from "next/navigation";

type idType = {
  id: string;
};

const DeleteGameButton = ({ id }: idType) => {
  const gameId = Number(id);
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/games/${gameId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }

    router.refresh();
    router.back();
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="px-5 py-2 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition font-bold cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteGameButton;
