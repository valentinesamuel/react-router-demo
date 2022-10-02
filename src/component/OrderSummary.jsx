import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Order Summary Confirmed</h2>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};
