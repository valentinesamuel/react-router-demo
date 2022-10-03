import { useState } from "react/cjs/react.production.min";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/");
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleLogin}>Login Here</button>
      </label>
    </div>
  );
};
