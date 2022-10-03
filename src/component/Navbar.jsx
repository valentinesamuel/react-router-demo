import { NavLink } from "react-router-dom";
import {useAuth} from './Auth'

export const Navbar = () => {
    const auth = useAuth()
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="ordersummary">Order Summary</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        {
            !auth.user && <NavLink to='/profile'> Profile</NavLink>
        }
      </ul>
    </nav>
  );
};
