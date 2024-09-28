import axios from 'axios';
const api = axios.create({
    baseURL: 'https://reqres.in/api',
});

export const login = async (email: string, password: string) => {

    try {
        const response = await api.post('/login', { email, password });
         console.log(response,"response");
        if (response.status === 200) {
            alert('Login Successfully');
            return response.data.token;
        }
    } catch (error) {
        alert('Login failed Please enter the correct email and password');
    }
};
export const register = async (email: string, password: string) => {

    try {
        const response = await api.post('/register', { email, password });
        if(response.status===200){
            alert('Register Successfully');
            return response.data.token;
        }
        
    } catch (error) {
        alert(error);
    }
};
// export const singleUser = async () => {
//     try {
//         const response = await api.get('/users');
//         return response.data.data;
//     } catch (error) {
//         throw new Error('Failed to fetch users');
//     }
// };

