import { getAllUser } from "@/services/usersService";
import Link from "next/link";
import { MdHome } from "react-icons/md";

const Users = async () => {
  const users = await getAllUser();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <Link className="flex items-center gap-2" href={"/"}>
            <MdHome
              size={32}
              className="hover:bg-gray-500 rounded-lg transition"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Users</h1>
          </Link>
        </div>
        <Link
          href={"/users/new"}
          className="border border-blue-500 text-blue-500 rounded-lg px-4 py-2 hover:bg-blue-50 transition"
        >
          New User
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <Link
            href={`/users/${user.id}`}
            key={user.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{user.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
