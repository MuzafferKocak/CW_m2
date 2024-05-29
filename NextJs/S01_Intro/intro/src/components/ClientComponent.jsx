"use client"

import React from 'react'
import ServerComponent from './ServerComponent';

const ClientComponent = ({childeren}) => {
    console.log("This is Client Component");
  return (
    <div>ClientComponent
    
    {childeren}
    </div>
  )
}

export default ClientComponent