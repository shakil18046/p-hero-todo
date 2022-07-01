import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div className='container mx-auto'>
            <div class="navbar bg-base-100">
                <div class="dropdown navbar-start lg:hidden">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="completedtask">completedtask</Link></li>
                    <li><Link to="todo">todo</Link></li>
                    <li><Link to="calender">calender</Link></li>
                    </ul>
                </div>
                <div class="lg:navbar-start">
                    <Link to="/" class="btn btn-ghost normal-case text-xl">ZAKAMART</Link>
                </div>
                
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                    <li><Link to="completedtask">completedtask</Link></li>
                    <li><Link to="todo">todo</Link></li>
                    <li><Link to="calender">calender</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;