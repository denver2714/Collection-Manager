import ModalBackdrop from "@/components/ModalBackdrop";
import * as usersService from "@/services/usersService";

const InterceptingId = async ({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) => {
  const { uuid } = await params;
  const user = await usersService.getUser(uuid);

  if (!user) return <div>User not found</div>;

  return (
    <ModalBackdrop>
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600">
          <div className="absolute -bottom-16 left-8">
            <img
              src={user?.image}
              alt={user?.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="pt-20 px-8 pb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">
            {user?.name}
          </h1>
          <p className="text-slate-600 leading-relaxed">{user?.description}</p>
        </div>
      </div>
    </ModalBackdrop>
  );
};

export default InterceptingId;
