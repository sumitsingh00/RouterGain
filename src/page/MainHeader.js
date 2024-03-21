import React from 'react'
import { Outlet } from 'react-router-dom'


const MainHeader = () => {
    return (
        <div>
          {/* <h1>HI THIS IS MAIN HADER</h1> */}
        <Outlet/>
          
        </div>
      )
}

export default MainHeader
