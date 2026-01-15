import { NextResponse } from "next/server";
import * as gamesService from "../../../services/gamesService";
import { HTTP_STATUS } from "../../../utils/httpStatus";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    const getGamesData = await gamesService.getAllGames();
    return NextResponse.json(getGamesData, { status: HTTP_STATUS.OK });
  } catch (error) {
    console.error("GET HTTP method error: ", error);
    return NextResponse.json(
      { message: "Get games not found" },
      { status: HTTP_STATUS.NOT_FOUND }
    );
  }
}

export async function POST(req: Request) {
  try {
    const gameData = await req.json();
    const createGameData = gamesService.createGame(gameData);
    return NextResponse.json(createGameData, { status: HTTP_STATUS.CREATED });
  } catch (error) {
    console.error("POST HTTP method error: ", error);
    revalidatePath("/games");
    return NextResponse.json(
      { message: "Create game failed" },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
