import React from 'react';
import PropTypes from 'prop-types';
import ToDo from "./ToDo";

function ToDoList({ items, completeItem }) {
    if (items.length === 0) {
        return (
            <div className="alert alert-success" role="alert">
                Congratulations your todo list is empty!
            </div>
        );
    }
    return (
        <ul className="list-group">
            {items.map(item => (
                <ToDo key={item.id} item={item} completeItem={() => completeItem(item.id)} />
            ))}
        </ul>
    );
}

ToDoList.propTypes = {
    items: PropTypes.array.isRequired,
    completeItem: PropTypes.func.isRequired,
};


export default ToDoList;