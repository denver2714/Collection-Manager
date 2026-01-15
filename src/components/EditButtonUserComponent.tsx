"use client";

import Link from "next/link";

const EditButtonUserComponent = ({ uuid }: { uuid: string }) => {
  return (
    <Link
      href={`/users/${uuid}/edit`}
      className="cursor-pointer  rounded-xl bg-slate-900 text-white px-5 py-2 text-sm font-medium hover:bg-slate-800 transition"
    >
      Edit Profile
    </Link>
  );
};

export default EditButtonUserComponent;
