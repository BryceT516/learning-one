import { MOVE_ITEM, ADD_ITEM } from './types';

let nextItemId = 7
let nextList = "list1"

export const clickItem = (payload) => ({
    type: MOVE_ITEM,
    payload
})

export const addItem = () => {
    let selectedList = '';
    
    if (nextList === "list1") {
        selectedList = "list1";
        nextList = "list2";
    } else {
        selectedList = "list2";
        nextList = "list1";
    }
    
    return({
        type: ADD_ITEM,
        payload: {
                    id: "item" + nextItemId,
                    name: "item " + nextItemId++,
                    listId: selectedList
        }
    })
}