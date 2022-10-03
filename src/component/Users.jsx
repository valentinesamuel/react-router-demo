import { Link, Outlet, useSearchParams } from "react-router-dom";

const arrayToString = (arr) => {
  console.log(typeof arr);
  if (typeof arr !== "object") return arr;
  return arr.join("+");
};

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  /*
let query = 'gender=male+female&brand=nike+puma+diadora&price=asc&name=High%Tight+Nike%Kyrie%2&sport=basketball+football+American%Football+track%and%field'

let querySections = query.split('&').forEach(query => {
  key = query.split('=')[0];
  value = query.split('=')[1];
  queryObj[key] = value.replace(/%/g, " ").split('+'); 
});
*/

  const activeUsersHandler = () => {
    const queries = {
      price: "asc",
      gender: arrayToString(["male", "female"]),
      brand: arrayToString(["nike", "diadora", "Paul Shark"]),
      name: arrayToString(["High Tight", "Nike Kyrie"]),
      sport: arrayToString([
        "basketball",
        "American Football",
        "track and field",
      ]),
    };

    setSearchParams(queries);
    console.log(Object.fromEntries(searchParams.entries()));
    console.log(window.location.search);
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

/* let query = 'gender=men&price=asc&brand=nike';
let queryArray = query.split('&')
console.log(queryArray);
let queryObject = queryArray.forEach(query => {
  key = query.split('=')[0];
value = query.split('=')[1];
queryObj[key] = value;
});



let queryObj = {}
let query = 'gender=male+female&brand=nike+puma+diadora&price=asc&name=High%Tight+Nike%Kyrie%2&sport=basketball+football+American%Football+track%and%field'

let querySections = query.split('&').forEach(query => {
  key = query.split('=')[0];
  value = query.split('=')[1];
  queryObj[key] = value.replace(/%/g, " ").split('+'); 
});
console.log('=========')
console.log(queryObj) */
