import { MOVE_ITEM, ADD_ITEM } from '../actions/types';

export default function lists(state=null, action) {
    switch (action.type) {
        case MOVE_ITEM:
            let newLists = { byId: {}, allIds: [...state.allIds] }
            let oldLists = Object.entries(state.byId);
            for (const [key, object] of oldLists) {
                let list = {id: object.id, title: object.title, items: []};
                let newItemsArray = object.items.filter(item => item !== action.payload.id);
                if (key !== action.payload.listId) {
                    newItemsArray.push(action.payload.id);
                }
                list.items = newItemsArray;
                newLists.byId[key] = list;
            }
            return newLists
            
        case ADD_ITEM:
            let nextLists = { byId: {}, allIds: [...state.allIds] }
            let priorLists = Object.entries(state.byId);

            for (const [key, object] of priorLists) {
                let list = {id: object.id, title: object.title, items: [...object.items, action.payload.id]};
                nextLists.byId[key] = list;
            }

            return nextLists
            
        default:
            return state
    }
}