import { Link, Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  const activeUsersHandler = () => {
    setSearchParams({ filter: "active" });
  };

  const resetFilterHandler = () => {
    setSearchParams({});
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 2</Link>
        </li>
        <li>
          <Link to="3">User 3</Link>
        </li>
        <li>
          <Link to="4">User 4</Link>
        </li>
      </ul>
      <Outlet />
      <div>
        <button onClick={activeUsersHandler}>Active Users</button>
        <button onClick={resetFilterHandler}>Reset Filter</button>
      </div>
      <h2> {showActiveUsers ? "Showing active Users" : "Showing all users"}</h2>
    </div>
  );
};
