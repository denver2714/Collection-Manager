"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const EditButtonUserComponent = ({ uuid }: { uuid: string }) => {
  return (
    <Button asChild>
      <Link href={`/users/${uuid}/edit`}>Edit Profile</Link>
    </Button>
  );
};

export default EditButtonUserComponent;
