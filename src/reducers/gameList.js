export default function gameList(state=[], action){
	if(action.type==='CLICK_GAME'){
		return action.payload;
	}
	else{
		return state;
	}
}
