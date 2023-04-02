import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filters/actionCreators';
const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return 'No task left'
        case 1:
            return '1 task';


        default:
            return `${no_of_todos} tasks`
    }

}

const Footer = () => {

    const todos = useSelector(state => state.todos);
    const filters = useSelector(state => state.filters);
    const { status, colors } = filters;

    const todosRemaining = todos.filter(todo => !todo.completed).length;

    const dispatch = useDispatch();

    const hanldeStatusChange = (status) => {
        dispatch(statusChanged(status))
    }
    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color, 'remove'));
        }
        else {
            dispatch(colorChanged(color, 'add'))
        }
    }


    return (
        <div>
            <div className="mt-4 flex justify-between text-xs text-gray-500">
                <p>{numberOfTodos(todosRemaining)}</p>
                <ul className="flex space-x-1 items-center text-xs">
                    <li
                        onClick={() => hanldeStatusChange('all')}
                        className={`cursor-pointer ${status === 'all' && 'font-bold'}`}>All</li>
                    <li>|</li>
                    <li className={`cursor-pointer ${status === 'incomplete' && 'font-bold'}`} onClick={() => hanldeStatusChange('incomplete')}>Incomplete</li>
                    <li>|</li>
                    <li className={`cursor-pointer ${status === 'complete' && 'font-bold'}`} onClick={() => hanldeStatusChange('complete')}>Complete</li>
                    <li></li>
                    <li></li>
                    <li
                        className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
                        onClick={() => handleColorChange('green')}
                    ></li>
                    <li
                        className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
                        onClick={() => handleColorChange('red')}
                    ></li>
                    <li
                        className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${colors.includes('yellow') && 'bg-yellow-500'}`}
                        onClick={() => handleColorChange('yellow')}
                    ></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;