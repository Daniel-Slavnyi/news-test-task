import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>{<NavLink to="/">Home</NavLink>}</li>
            <li>{<NavLink to="/news">News</NavLink>}</li>
            <li>{<NavLink to="/profile">Profile</NavLink>}</li>
            <li>{<NavLink to="/register">Register</NavLink>}</li>
            <li>{<NavLink to="/login">Login</NavLink>}</li>
          </ul>
        </nav>
      </header>
      <main>{<Outlet />}</main>
    </>
  );
}
