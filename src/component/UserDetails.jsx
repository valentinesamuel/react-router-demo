import { useParams } from "react-router-dom";

export const UserDetails = () => {  
  const { userId } = useParams();
  return (
    <div>
      <h3>This is user {userId}</h3>
    </div>
  );
};
