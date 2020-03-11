import {ADD_TO_LIST, REMOVE_FROM_LIST} from './Action_Type';

export const addList = id => {
    return{
        type: ADD_TO_LIST,
        id
    };
};

export const removeList = id =>{
    return{
        type: REMOVE_FROM_LIST,
        id
    };
};