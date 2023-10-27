import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) =>{
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
		<tr>
		<td>{props.name}</td>
		<td>{props.cost}</td>
        <td><img src="https://pngimg.com/uploads/plus/plus_PNG121.png" alt="-" width="48" height="48" onClick={event=> increaseAllocation(props.name)}></img></td>
        <td><img src="https://pngimg.com/uploads/minus/minus_PNG60.png" alt="-" width="48" height="48" onClick={event=> decreaseAllocation(props.dname)}></img></td>
		<td align="center"><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
		<td align="center"><button onClick={event=> decreaseAllocation(props.name)}>-</button></td>
		<td align="center"><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
		</tr>
	);
};
export default ExpenseItem;
