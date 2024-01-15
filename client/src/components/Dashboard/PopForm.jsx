import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PopForm = ({ onClose, onSubmit }) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    startupname: '',
    incorporationdate: '',
    startupaddress: '',
    city: '',
    state: '',
    emailaddress: '',
    phonenumber: '',
    foundername: '',
    industry: 'IT services',
    sector: 'IT consultancy',
    businessidea: '',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      // Send a POST request to your signup API
      const response = await axios.post('http://localhost:5000/api/user/startup', formData);
      if (response.status === 201) {
        setSuccessMessage('User Submit  successfully');
        setErrorMessage('');
        navigate('/');
        console.log(response);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('Internal server error. Please try again later.');
      setSuccessMessage('');
    }
    onClose();
    // Reset form data (if needed)
    setFormData({
      startupname: '',
      incorporationdate: '',
      startupaddress: '',
      city: '',
      state: '',
      emailaddress: '',
      phonenumber: '',
      foundername: '',
      industry: 'IT services',
      sector: 'IT consultancy',
      businessidea: '',
    });
  };
  
  return (
    <div
    className="flex justify-center items-center h-screen shadow-lg z-50 ">
    <form className="lg:w-[50rem] mx-auto p-4 bg-white rounded-lg ">
    {/* Startup Name */}
    <div className="mb-4">
      <label htmlFor="startupName" className="block text-sm font-medium text-gray-600">
        Startup Name
      </label>
      <input
        type="text"
        id="startupname"
        name="startupname"
        value={formData.startupname}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-800 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="startupName" className="block text-sm font-medium text-gray-600">
      Incorporation Date
      </label>
      <input
        type="text"
        id="incorporationdate"
        name="incorporationdate"
        value={formData.incorporationdate}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="startupaddress" className="block text-sm font-medium text-gray-600">
      Startup Address
      </label>
      <input
        type="text"
        id="startupaddress"
        name="startupaddress"
        value={formData.startupaddress}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="city" className="block text-sm font-medium text-gray-600">
      City
      </label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="state" className="block text-sm font-medium text-gray-600">
      State
      </label>
      <input
        type="text"
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="emailaddress" className="block text-sm font-medium text-gray-600">
      Email Address
      </label>
      <input
        type="text"
        id="emailaddress"
        name="emailaddress"
        value={formData.emailaddress}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-600">
      Phone Number
      </label>
      <input
        type="text"
        id="phonenumber"
        name="phonenumber"
        value={formData.phonenumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
    <label htmlFor="foundername" className="block text-sm font-medium text-gray-600">
    Founder Name
    </label>
    <input
      type="text"
      id="foundername"
      name="foundername"
      value={formData.foundername}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>

  
    {/* Industry dropdown */}
    <div className="mb-4">
      <label htmlFor="industry" className="block text-sm font-medium text-gray-600">
        Industry
      </label>
      <select
        id="industry"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        className="mt-1 block w-full border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="IT services">IT services</option>
        <option value="agriculture">Agriculture</option>
        <option value="agriculture">biotechnologies</option>
        <option value="agriculture">Design</option>
        <option value="agriculture">Fashion</option>
        <option value="agriculture">Green Technologies</option>
        <option value="agriculture">Marketing</option>
        <option value="agriculture">Others</option>
      </select>
    </div>

    {/* Sector dropdown */}
    <div className="mb-4">
      <label htmlFor="sector" className="block text-sm font-medium text-gray-600">
        Sector
      </label>
      <select
        id="sector"
        name="sector"
        value={formData.sector}
        onChange={handleChange}
        className="mt-1 block w-full border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="IT consultancy">IT consultancy</option>
        <option value="IT management">IT management</option>
        <option value="IT management"> IT services</option>
        <option value="IT management">agri tech</option>
        <option value="IT management">agriculture chemicals</option>
        <option value="IT management">organic agriculture</option>
        <option value="IT management">web design</option>
        <option value="IT management">fashion technologies</option>
        <option value="IT management">Others</option>
        {/* Add other sector options */}
      
      </select>
    </div>

    {/* Business Idea textarea */}
    <div className="mb-4">
      <label htmlFor="businessIdea" className="block text-sm font-medium text-gray-600">
        Business Idea
      </label>
      <textarea
        id="businessidea"
        name="businessidea"
        value={formData.businessidea}
        onChange={handleChange}
        rows="4"
        className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      ></textarea>
    </div>

    {/* Submit button */}
    <div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-700 active"
      >
        Submit 
      </button>
    </div>
  </form>
  </div>
  )
}

export default PopForm