import {useState} from 'react'
import SigninImg from '../../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signin = () => {

    const [formData, setFormData] = useState({
        emailaddress: '',
         password: ''
      });
    
      const [errorMessage, setErrorMessage] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:5000/api/user/login', formData);
      
          if (response.status === 200) {
            if (response.data.success) {
              setSuccessMessage('User login successfully');
              setErrorMessage('');
              navigate('/')
              console.log(response);
            } else {
              setErrorMessage('Invalid credentials. Please try again.');
              setSuccessMessage('');
            }
          } else {
            setErrorMessage('Something went wrong. Please try again.');
            setSuccessMessage('');
          }
        } catch (error) {
          console.error('Error signing in:', error);
          setErrorMessage('Internal server error. Please try again later.');
          setSuccessMessage('');
        }
      };


  return (
    <div>
    

<section className="bg-gray-50 dark:bg-gray-900">
<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    <div className="flex flex-col justify-center">
       
        <img src= {SigninImg} alt='img' />
    </div>
    <div>
        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sign your Account
            </h2>
            <form className="mt-8 space-y-6"  onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email Address
          </label>
                <input type="emailaddress" name="emailaddress" id="emailaddress" value={formData.emailaddress} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
            </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" value={formData.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required/>
                    </div>
                    <div className="ms-3 text-sm">
                    <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                    </div>
                    <a href="#" className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <Link to='/' type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</Link>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Not registered yet? 
                    <Link to="/signup" className="text-blue-600 hover:underline dark:text-blue-500">Create account</Link>
                </div>
            </form>
        </div>
    </div>
</div>
</section>

    </div>
  )
}

export default Signin