import React, { useState, useEffect } from 'react'

const Filter = ({filter, handleFilterChange}) => {
  return (
    <div>
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
    </div>
  )
}


export default Filter