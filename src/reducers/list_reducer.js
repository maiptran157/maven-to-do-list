import types from '../actions/types';

const currentItemList = [];

const DEFAULT_STATE = {
    itemList: currentItemList,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.ADD_LIST_ITEM:
            var dataToAdd = {
                itemName: action.payload,
                timeStamp: new Date().getTime(),
            }
            currentItemList.push(dataToAdd);
            return { ...state, itemList: currentItemList }
        case types.GET_ITEM_LIST:
            return { ...state }
        default:
            return state;
    }
}