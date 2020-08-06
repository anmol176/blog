
//Use switch statements if there are multiple action creators.
export default (state=[],action) => {
    switch(action.type) {
        case 'FETCH_POSTS': 
            return action.payload;
        default: 
            return state;
    }
};