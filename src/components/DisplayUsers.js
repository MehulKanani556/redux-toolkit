import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice';
export default function DisplayUsers() {
  const dispatch = useDispatch();
  const data = useSelector((state) =>{
    return state.users;
  })
  const styles = {
    userList: {
      listStyleType: 'none',
      padding: 0,
      margin: '20px', // Added margin around the list
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Added shadow to the list
    },
    userItem: {
      backgroundColor: '#f0f0f0',
      padding: '10px',
      marginBottom: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out', // Enhanced transition for all properties
      boxShadow: '0 1px 3px rgba(0,0,0,0.15)', // Added shadow to each item
      textAlign:'left',
      paddingLeft:'30px',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
    },
    userItemHover: {
      backgroundColor: '#e0e0e0',
      transform: 'scale(1.03)', // Scale up on hover
    },
    userName: {
      fontWeight: 'bold',
      color: '#333',
      fontSize: '1.2em', // Increased font size
    },
    deleteButton: {
      color:'red',
      borderRadius:'3px',
      border:'none',
      fontSize:'20px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'  // Center align the delete button text and icon in the button container
    }
  }
  const deleteUser = (id)=>{
    dispatch(removeUser(id))
  }
  return (
    <ul style={styles.userList}> 
    {
      data.map((user, id) => {
        return (
          <li key={id} style={styles.userItem}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = styles.userItemHover.backgroundColor;
                e.currentTarget.style.transform = styles.userItemHover.transform; // Apply scale transformation
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = '#f0f0f0';
                e.currentTarget.style.transform = 'none'; // Reset transformation
              }}>
            <span style={styles.userName}>{user.name}</span>
            <button style={styles.deleteButton} onClick={()=>deleteUser(id)}><MdDeleteForever /></button>
          </li>
        )
      })
    }
  </ul>
  )
}
