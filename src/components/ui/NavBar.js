import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Input File
            </Link>
        </nav>
    )
}