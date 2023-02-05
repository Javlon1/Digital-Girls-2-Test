const initialState = [
    {
        id:1,
        Directions: '',
        Name: '',
        Tel: ''
    }
]

const Users = (state=initialState, action) => {
    const item = action.payload

    switch(action.type){
        case 'DIRECTIONS':
            state[0].Directions = item.directions
            return state
        case 'NAME':
            state[0].Name = item.name
            state[0].Tel = item.tel
            return state
        default:
            return state
    }
}

export default Users