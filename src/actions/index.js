import types from './types';

export const addListItem = (data) => {
    console.log("data.itemName:", data.itemName)
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