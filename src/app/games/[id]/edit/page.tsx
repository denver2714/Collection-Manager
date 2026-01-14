import EditGameComponent from "@/components/EditGameComponent";

const EditGame = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <EditGameComponent id={id} />
    </div>
  );
};

export default EditGame;
