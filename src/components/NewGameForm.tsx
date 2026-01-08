"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface GameForm {
  name: string;
  image: string;
  genre: string;
  releaseDate: string;
}

const NewGameForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameForm>();

  const onSubmit = async (data: GameForm) => {
    console.log(data);

    const res = await fetch("http://localhost:3000/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    router.refresh();
    router.back();
  };

  return (
    <div>
      <div className="p-2">
        <button
          onClick={() => router.back()}
          type="button"
          className="rounded-lg border border-red-500 text-red-500 p-2 hover:bg-red-500 hover:text-white transition cursor-pointer"
        >
          Back
        </button>
      </div>

      <div className="flex items-center justify-center min-h-screen space-x-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full sm:max-w-md md:max-w-lg bg-white p-8 rounded-2xl shadow-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900">Add New Game</h2>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter game name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              {...register("image", {
                required: "Image is required",
              })}
            />

            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              placeholder="Enter game genre"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              {...register("genre", {
                required: "Genre is required",
              })}
            />
            {errors.genre && (
              <p className="text-red-500">{errors.genre.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="releaseDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Release Date
            </label>
            <input
              type="date"
              id="releaseDate"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              {...register("releaseDate", {
                required: "Release Date is required",
                validate: (value) => {
                  if (new Date(value) > new Date()) {
                    return "Released  date cannot be in the future";
                  }
                  return true;
                },
              })}
            />
            {errors.releaseDate && (
              <p className="text-red-500">{errors.releaseDate.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewGameForm;
