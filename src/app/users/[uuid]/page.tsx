import * as usersService from "@/services/usersService";

const UserId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await usersService.getUser(id);

  return (
    <div>
      <div>wasd</div>
    </div>
  );
};

export default UserId;
