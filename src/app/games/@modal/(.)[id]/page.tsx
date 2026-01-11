import HoverGameComponent from "@/components/HoverGameComponent";
import ModalBackdrop from "@/components/ModalBackdrop";
import prisma from "../../../../../lib/prisma";


const GameIdIntercepted = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const gameId = Number(id);
  const specificGame = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!specificGame) {
    return (
      <ModalBackdrop>
        <div className="text-gray-500 font-medium">Game not found</div>
      </ModalBackdrop>
    );
  }

  return (
    <ModalBackdrop>
      <HoverGameComponent game={specificGame} />
    </ModalBackdrop>
  );
};

export default GameIdIntercepted;
