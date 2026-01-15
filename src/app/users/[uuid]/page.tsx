import BackButtonUserComponent from "@/components/BackButtonUserComponent";
import DeleteUserComponent from "@/components/DeleteUserComponent";
import EditButtonUserComponent from "@/components/EditButtonUserComponent";
import * as usersService from "@/services/usersService";

const UserId = async ({ params }: { params: Promise<{ uuid: string }> }) => {
  const { uuid } = await params;
  const user = await usersService.getUser(uuid);

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <div className="p-2">
        <BackButtonUserComponent />
      </div>

      <div className="min-h-screen  flex items-center justify-center p-6">
        <div className="relative max-w-2xl w-full rounded-3xl bg-white/80 backdrop-blur shadow-2xl overflow-hidden">
          <div
            className="relative h-52 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600
"
          >
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
              <img
                src={user?.image}
                alt={user?.name}
                className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="pt-24 px-8 pb-10 text-center">
            <h1 className="text-3xl font-bold text-slate-900">{user?.name}</h1>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-xl mx-auto">
              {user?.description || "No description provided."}
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <EditButtonUserComponent uuid={user.id} />
              <DeleteUserComponent uuid={user.id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserId;
