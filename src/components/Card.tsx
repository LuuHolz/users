import {DataUsers} from '../Types/Api.type';

const Card = ({ user }: { user?: DataUsers }) => {
  if (!user) {
    return null; 
  }

  return (
    <div>
      <p>City: {user.address.city}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default Card
