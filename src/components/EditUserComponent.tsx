"use client";

import * as actions from "@/actions/action";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import BackButtonUserComponent from "./BackButtonUserComponent";

type FormValues = {
  name: string;
  description: string;
  image: string;
};

const EditUserComponent = ({
  uuid,
  user,
}: {
  uuid: string;
  user: {
    name: string;
    description: string;
    image: string;
  };
}) => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      name: user.name,
      description: user.description,
      image: user.image,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image);

    await actions.editUser(formData, uuid);
    router.back();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2 border border-gray-500 shadow-2xl p-12 rounded-lg"
    >
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input
          {...register("name", { required: true })}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Description
        </label>
        <textarea
          {...register("description", { required: true })}
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Image URL
        </label>
        <input
          {...register("image", { required: true })}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <BackButtonUserComponent />
        <button
          type="submit"
          className="rounded-xl bg-slate-900 px-6 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Saving..." : "Save changes"}
        </button>
      </div>
    </form>
  );
};

export default EditUserComponent;
