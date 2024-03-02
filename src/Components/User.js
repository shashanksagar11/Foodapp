import React, { useState } from 'react'

const User = ({name}) => {
  const [count]= useState(0);
  const [count2]= useState(1);
  return (
    <div className='user-card m-4 p-4 bg-gray-50 rounded-lg'>
         <h2>Count = {count}</h2>
         <h2>Count2 = {count2}</h2>
        <h2>Name: {name}</h2>
        <h2>Location: Banglore</h2>
        <h2>Contact: @shashank</h2>
    </div>
  )
}

export default User