import { Route, Routes } from "react-router-dom";
import { About } from "./component/About";
import { FeaturedProducts } from "./component/FeaturedProducts";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { NewProducts } from "./component/NewProducts";
import { Users } from "./component/Users";
import { NoMatch } from "./component/NoMatch";
import { OrderSummary } from "./component/OrderSummary";
import { UserDetails } from "./component/UserDetails";
import { Products } from "./component/Products";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="ordersummary" element={<OrderSummary />}></Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />}></Route>
        </Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route index path="featured" element={<FeaturedProducts />} />
          <Route path="newproducts" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}
