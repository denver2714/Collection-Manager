import EditUserComponent from "@/components/EditUserComponent";
import * as usersService from "@/services/usersService";

const Edit = async ({ params }: { params: Promise<{ uuid: string }> }) => {
  const { uuid } = await params;
  const user = await usersService.getUser(uuid);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">User not found</p>
      </div>
    );
  }

  return <EditUserComponent uuid={uuid} user={user} />;
};

export default Edit;
