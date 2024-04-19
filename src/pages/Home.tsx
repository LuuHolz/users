import { useState } from 'react';
import Card from '../components/Card';
import { DataUsers } from '../Types/Api.type';

const Home = ({ users, isLoading }: { users: DataUsers; isLoading: boolean }) => {

    const [newUser, setNewUser] = useState('');

    const newDataUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setNewUser('');
    }

    return (
        <>
            <div className='homeContainer'>
                <h1>Usuarios</h1>
                <form onSubmit={(e) => newDataUser(e)}>
                    <label htmlFor="">
                        <input onChange={(e) => setNewUser(e.target.value)} value={newUser} type="text" name="" id="" />
                    </label>
                    <button type='submit' disabled={isLoading}>Add</button>
                </form>
                {users.map((user: DataUsers, index: number) => (
                    <Card key={index} user={user} />
                ))}
            </div>
        </>
    )
}

export default Home;

