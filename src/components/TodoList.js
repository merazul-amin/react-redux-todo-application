import React from 'react';

import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const filters = useSelector(state => state.filters);
    const { status, colors } = filters;
    const filterByStatus = todo => {
        switch (status) {
            case 'complete':
                return todo.completed;
            case 'incomplete':
                return !todo.completed
            default:
                return todo;
        }
    }
    const filterByColor = todo => {
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return todo;
    }

    return (
        <div>
            {
                todos
                    .filter(filterByStatus)
                    .filter(filterByColor)
                    .map(todo => <Todo todo={todo} />)
            }

        </div>
    );
};

export default TodoList;