export default function updateGameList(gameList: string[]){
	return { type: "CLICK_GAME", payload: gameList }
}
