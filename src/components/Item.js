import React from 'react';

const Item = ({ onClick, id, name, listId }) => {
    return (
        <div onClick={onClick}>
            <h2>{id}</h2>
            {name}
        </div>
    )
};

export default Item