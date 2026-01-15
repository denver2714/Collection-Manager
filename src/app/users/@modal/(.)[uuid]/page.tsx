import HoverUserComponent from "@/components/HoverUserComponent";
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
      <HoverUserComponent user={user}/>
    </ModalBackdrop>
  );
};

export default InterceptingId;
