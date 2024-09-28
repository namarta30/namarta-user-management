import { useEffect, useState } from 'react';
import { api } from '../../constant';
const Dashboard = () => {
  const [showData, setShowData] = useState()
  const getUsers = async () => {
    try {
      const response = await api.get('/users');
      setShowData(response.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getUsers();

  }, [])

  return (
    <>

      <div>


      </div>
    </>
  )
}

export default Dashboard