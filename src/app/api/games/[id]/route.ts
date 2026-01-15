import { NextResponse } from "next/server";
import { HTTP_STATUS } from "../../../../utils/httpStatus";
import * as gamesService from "../../../../services/gamesService";
import { revalidatePath } from "next/cache";

type ParamsType = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, { params }: ParamsType) {
  try {
    const { id } = await params;
    const gameId = Number(id);

    if (isNaN(gameId))
      return NextResponse.json(
        { message: "Invalid game id" },
        { status: HTTP_STATUS.BAD_REQUEST }
      );

    const game = await gamesService.getGame(gameId);

    if (!game)
      return NextResponse.json(
        { message: "Game not found" },
        { status: HTTP_STATUS.NOT_FOUND }
      );

    return NextResponse.json(game, { status: HTTP_STATUS.OK });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching game" },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}

export async function PUT(req: Request, { params }: ParamsType) {
  try {
    const { id } = await params;
    const gameId = Number(id);
    if (isNaN(gameId))
      return NextResponse.json(
        { message: "Game id is invalid" },
        { status: HTTP_STATUS.BAD_REQUEST }
      );

    const { name, image, genre, releaseDate } = await req.json();

    const editGameData = await gamesService.editGame(
      { name, image, genre, releaseDate },
      gameId
    );

    if (!editGameData)
      return NextResponse.json(
        { message: "Game not found" },
        { status: HTTP_STATUS.NOT_FOUND }
      );

    revalidatePath("/games");
    revalidatePath(`/games/${gameId}`);
    return NextResponse.json(editGameData, { status: HTTP_STATUS.OK });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update game" },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}

export async function DELETE(req: Request, { params }: ParamsType) {
  try {
    const { id } = await params;
    const gameId = Number(id);

    if (isNaN(gameId))
      return NextResponse.json(
        { message: "Game id is invalid" },
        { status: HTTP_STATUS.BAD_REQUEST }
      );

    const deletedGameData = await gamesService.deleteGame(gameId);

    revalidatePath("/games");
    revalidatePath(`/games/${gameId}`);
    return new NextResponse(null, {
      status: HTTP_STATUS.NO_CONTENT,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error deleting Game" },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
