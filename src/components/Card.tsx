

const Card = ({item}) => {
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
