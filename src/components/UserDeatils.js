import React, { useState } from 'react'
import DeleteAllUsers from './DeleteAllUsers'
// import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';

const generateUser = (index) => {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return {
        id: index,
        name: `${randomFirstName} ${randomLastName}`
    };
};

export default function UserDeatils() {

    const dispatch = useDispatch();

    const [userIndex, setUserIndex] = useState(1); // Start from user 1

    const addNewUser = () => {
        const newUser = generateUser(userIndex);
        dispatch(addUser(newUser));
        setUserIndex(userIndex + 1); // Increment for next user
    };

    const styles = {
        container: {
            padding: '20px',
            margin:'0px 120px'
        },
        header: {
            color: '#333',
            textAlign: 'center'
        },
        userList: {
            listStyle: 'none',
            marginTop: '20px'
        },
        button: {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
            marginTop:'20px'

        },
        div:{
            display:'flex',
            justifyContent:'space-between'
        }
    };
    return (
        // <div>
        //     <div>
        //         <div>

        //             <h1>List of user details</h1>
        //             <button onClick={()=>addNewUser()}>Add New Users</button>

        //         </div>
        //         <div>
        //             <ul style={{ listStyle:"none" }}>

        //               <DisplayUsers />
        //             </ul>
        //         </div>

        //     </div>
        //     <div>
        //         <DeleteAllUsers />
        //     </div>

        // </div>
        <div style={{ backgroundColor:'#f4f4f4' }}>

        <div style={styles.container}>
            <div style={styles.div}>

                <h1 style={styles.header}>List of user details</h1>
                <button style={styles.button} onClick={addNewUser}>Add New Users</button>
            </div>
            <ul style={styles.userList}>
                <DisplayUsers />
            </ul>
            <DeleteAllUsers />
        </div>
        </div>
    )
}
