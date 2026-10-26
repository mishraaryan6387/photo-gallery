function favouriteReducer(state,action){
    switch(action.type){
        case "TOGGLE_FAVOURITE":{
            const photoId = action.payload ;
            const alreadyfavourite = state.includes(photoId);

            if (alreadyfavourite) {
                return state.filter((id)=> id !== photoId);
            }
            return [...state,photoId];
        }

        default:
            return state ;
    }

}
export default favouriteReducer;