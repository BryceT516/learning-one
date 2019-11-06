import React from 'react';
import Item from './Item';

const ItemsList = ({ items, clickItem }) => {
    return(
        <div>
            {items.map(item => 
                <Item 
                    key={item.id} 
                    {...item} 
                    onClick={() => clickItem({id:item.id, listId:item.listId}) }
                />
            )}
        </div>
    )
}

export default ItemsList