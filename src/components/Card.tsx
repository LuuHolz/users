import {DataUsers} from '../Types/Api.type';

const Card = ({item}: DataUsers) => {
  return (
    <>
      <div>
        <p>City: {item.city}</p>
        <p>Email: {item.email}</p>
        <p>Phone: {item.phone}</p>
      </div>
    </>
  )
}

export default Card
