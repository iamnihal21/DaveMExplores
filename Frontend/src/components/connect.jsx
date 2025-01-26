import axios from 'axios';

export default function registerUser(userData) {
  const newUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', userData);
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
    }
  };

  // Call the function to register the user
  newUser();
}