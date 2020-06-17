import {ADD_TO_LIST, REMOVE_FROM_LIST} from '../Actions/Action_Type';


const initialState={
    "mylist": [{
        "title": "Futurama",
        "id": 1,
        "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },
    {
        "title": "The Interview",
        "id": 2,
        "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },
    {
        "title": "Gilmore Girls",
        "id": 3,
        "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
    ],
    "recommendations": [{
        "title": "Family Guy",
        "id": 4,
        "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },
    {
        "title": "The Croods",
        "id": 5,
        "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },
    {
        "title": "Friends",
        "id": 6,
        "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
    ]
}

function reducer(state=initialState, action){
    let indexrecom = state.recommendations.find((item) => item.id === action.id); 
    let indexlist = state.mylist.find((item) => item.id === action.id);
    switch(action.type){
        case ADD_TO_LIST:
            return{
                ...state,
                mylist: [...state.mylist, indexrecom],
                recommendations: state.recommendations.filter((item) => item.id !== action.id)

            };
        
        case REMOVE_FROM_LIST:
            return{
                ...state,
                recommendations: [...state.recommendations, indexlist],
                mylist: state.mylist.filter((item) => item.id !== action.id)
            };
        default:
            return state;
    }
}



export default reducer;