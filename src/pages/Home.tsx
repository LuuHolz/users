import { useState } from 'react';
import Card from '../components/Card';
import { DataUsers } from '../Types/Api.type';

const Home = ({users, isLoading} : {users: DataUsers; isLoading: boolean}) => {

    const [newUser, setNewUser] = useState('');

    const newDataUser = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        setNewUser('');
    }

    return (
        <>
            <h1>Usuarios</h1>
            <form action="" onSubmit={(e) => newDataUser(e)}>
                <label htmlFor="">
                    <input onChange={(e) => setNewUser(e.target.value)} value={newUser} type="text" name="" id="" />
                </label>
                <button type='submit' disabled={isLoading}>Add</button>
            </form>
            {users.map((user, index) => (
                <Card key={index} item={user} />
            ))}



        </>
    )
}

export default Home

