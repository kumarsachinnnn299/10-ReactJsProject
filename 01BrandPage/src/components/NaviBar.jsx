import React from 'react'

function NaviBar() {
  return (
    <div className='container'>
       <nav>
          <div className="logo">
            <img src="/public/images/brand_logo.png" alt="logo"/>
          </div>

          <ul>
            <li href='#'>Menu</li>
            <li href='#'>Location</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
          </ul>

          <button >Login</button>
        </nav>
    </div>
  )
}

export default NaviBar
