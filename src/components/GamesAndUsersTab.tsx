import Link from "next/link";
import React from "react";

const GamesAndUsersTab = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex rounded-xl bg-white p-2 shadow-md">
        <Link
          href="/games"
          className="rounded-lg px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
        >
          Games
        </Link>

        <Link
          href="/users"
          className="rounded-lg px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
        >
          Users
        </Link>
      </div>
    </div>
  );
};

export default GamesAndUsersTab;
