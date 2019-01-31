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
        case types.DELETE_ITEM:
            for (var i = 0; i < currentItemList.length; i++) {
                if (currentItemList[i].itemName === action.payload.itemName && currentItemList[i].timeStamp === action.payload.timeStamp) {
                    currentItemList.splice(i, 1);
                }
            }
            return { ...state, itemList: currentItemList }
        default:
            return state;
    }
}