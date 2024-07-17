import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/users">User</NavLink>
            </li>
            <li>
                <NavLink to="/contact/adfar">ADfar</NavLink>
            </li>
        </ul>
    </div>
  )
}
