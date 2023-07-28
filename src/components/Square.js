import React from 'react'

export default function Square({value, onClick}) {
  return (
    <div onClick={onClick}
    style={{border:"1px solid black", width:"100%", height:"6rem", display:"flex", alignItems:"center", justifyContent:"center"}} 
    >{value}</div>
  )
}
