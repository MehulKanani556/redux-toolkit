import React from 'react'
import { useDispatch } from 'react-redux'
// import { deleteUser } from '../store/slices/UserSlice';
import { deleteUser } from '../store/actions';
export default function DeleteAllUsers() {
    const dispatch = useDispatch();

    const  deleteUsers = () =>{
        dispatch(deleteUser())
    }
    return (
        <div>
            <button onClick={() => deleteUsers()}>Delete All Users</button>

        </div>
    )
}
