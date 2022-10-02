import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Home Page </h2>
      <button onClick={() => navigate("ordersummary")}>Place Order</button>
    </>
  );
};
