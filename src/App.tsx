import useUsers from '../hooks/useUsers'
import { useState, useEffect } from "react";
import Home from './pages/Home'
import './styles/style.css'

function App() {
  const { isLoading, getUsers } = useUsers();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const callApi = async () => {

      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        throw error;
      }

    }
  }

  return (
    <>
      <Home users={users} />
    </>
  )
}

export default App
