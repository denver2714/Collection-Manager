import EditGameComponent from "@/components/EditGameComponent";

const EditGame = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <EditGameComponent id={id} />;
};

export default EditGame;
