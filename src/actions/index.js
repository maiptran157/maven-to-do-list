import types from './types';

export const addListItem = (data) => {
    return {
        type: types.ADD_LIST_ITEM,
        payload: data.itemName
    }
}

export const getListItems = () => {
    return {
        type: types.GET_ITEM_LIST,
    }
}

export const deleteItem = (data) => dispatch => {
    dispatch({
        type: types.DELETE_ITEM,
        payload: data
    })
}