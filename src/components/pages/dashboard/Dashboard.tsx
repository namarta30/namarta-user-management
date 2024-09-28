import React, { useEffect, useState } from 'react';
import { api } from '../../constant';
import Image from '../../module/Image';

interface User {
  id: number;
  first_name: string;
  email: string;
  avatar: string;
}

interface UserResponse {
  data: User[];
}

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await api.get<UserResponse>('/users'); 
      setUsers(response.data.data); 
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center mt-5">User Data</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-5'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : users.length > 0 ? (
          users.map((user: User) => (
            <div key={user.id} className="shadow rounded p-4">
              <div className='m-auto w-[90%] '>

              <Image imageUrl={user.avatar} widthData="100%" />
              </div>
              <p className='mt-3'>{user.first_name}</p>
              <p>{user.email}</p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
