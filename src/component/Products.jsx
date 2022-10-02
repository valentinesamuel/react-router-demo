import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="featured">Featured</Link>
          </li>
          <li>
            <Link to="newproducts">New</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
