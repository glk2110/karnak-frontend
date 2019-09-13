export default function updateGameList(gameList){
	console.log(gameList)
	return { type: "CLICK_GAME", payload: gameList }
}
