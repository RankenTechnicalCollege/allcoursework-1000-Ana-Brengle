import React from 'react'

const Square = ({value, handleClick}) => {

  return (
    <div>
      <button className="square"
      onClick={() => handleClick(value)}
      >{value}</button>
    </div>
  )
}

export default Square