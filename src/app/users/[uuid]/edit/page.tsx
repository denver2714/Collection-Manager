import EditUserComponent from "@/components/EditUserComponent";
import * as usersService from "@/services/usersService";

const Edit = async ({ params }: { params: Promise<{ uuid: string }> }) => {
  const { uuid } = await params;
  const user = await usersService.getUser(uuid);

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        User not found
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen">
  
        <EditUserComponent uuid={uuid} user={user} />
     
    </div>
  );
};

export default Edit;
