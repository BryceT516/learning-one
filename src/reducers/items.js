import { MOVE_ITEM, ADD_ITEM } from '../actions/types';

export default function items(state=null, action) {
    switch (action.type) {
        case MOVE_ITEM:
            let newItems = { byId: {}, allIds: [...state.allIds] }
            let oldItemsById = Object.entries(state.byId);
            
            for (const [key, object] of oldItemsById) {
                let newListId = (object.id === action.payload.id) ? ((action.payload.listId === "list1") ? "list2" : "list1") : object.listId;
                let item = {id: object.id, name: object.name, listId: newListId}
                newItems.byId[key] = item;
            }
            return newItems 
            
        case ADD_ITEM:
            console.log(action.payload)
            let nextItems = { byId: {}, allIds: [...state.allIds, action.payload.id] }
            let priorItemsById = Object.entries(state.byId);
            
            for (const [key, object] of priorItemsById) {
                let item = {id: object.id, name: object.name, listId: object.listId}
                nextItems.byId[key] = item;
            }
            
            nextItems.byId[action.payload.id] = {
                                                    id: action.payload.id,
                                                    name: action.payload.name,
                                                    listId: action.payload.listId
                                                }
                                                
            return nextItems 
            
        default:
            return state
    }
}