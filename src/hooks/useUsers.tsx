import { useState } from 'react'

const useUsers = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('https://fakestoreapi.com/users');
            const data = await response.json();

            return data
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading, getUsers
    }
}

export default useUsers
