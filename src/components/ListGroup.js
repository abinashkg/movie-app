import React from 'react';

function ListGroup(props) {
    return (
        <div className="list-group" id="list-tab" role="tablist">
            {props.data.map(item => (
               <button type="button" onClick={() => props.onClick(item)} class="list-group-item list-group-item-action" data-toggle="list" role="tab">{item}</button> 
            ))}
        </div>
    );
}

export default ListGroup;
