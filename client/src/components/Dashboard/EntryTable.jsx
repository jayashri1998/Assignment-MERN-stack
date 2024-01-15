import {useState, useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const EntryTable = () => {
    const [startups, setStartups] =useState([]);
    const navigate = useNavigate();
    
    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response =await axios.get('http://localhost:5000/api/user/startup');
                setStartups(response.data);
            }catch (error) {
                console.error('Error fetching startup data:', error);
            }
        }
       fetchData();
    },[])
    const handleEdit = (id) => {
        navigate('/popform')
        console.log(`Edit startup with ID: ${id}`);
      };
    
      const handleDelete = (id) => {
        const updatedStartups = startups.filter((startup) => startup._id !== id);
        setStartups(updatedStartups);
        console.log(`Delete startup with ID: ${id}`);
      };

      if (startups.length === 0) {
        return <p></p>;
      }
     
  return (
    <div>
   
   

<div className="relative overflow-x-auto">
<div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative z-20">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">
            Startup Name
            </th>
            <th scope="col" className="px-6 py-3">
            Incorporation Date
            </th>
            <th scope="col" className="px-6 py-3">
            Startup Address
            </th>
            <th scope="col" className="px-6 py-3">
            City 
            </th>
            <th scope="col" className="px-6 py-3">
            State
            </th>
            <th scope="col" className="px-6 py-3">
            Email Address
            </th>
            <th scope="col" className="px-6 py-3">
            Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
            Founder Name
            </th>
            <th scope="col" className="px-6 py-3">
            Industry
            </th>
            <th scope="col" className="px-6 py-3">
            Sector
            </th>
            <th scope="col" className="px-6 py-3">
            Business Idea
            </th>
            <th scope="col" className="px-6 py-3">
            Action
            </th>
        </tr>
    </thead>
    <tbody>
    {startups.map((startup) => (
        <tr key={startup._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {startup.startupname}
          </th>
          <td className="px-6 py-4">
            {startup.incorporationdate}
          </td>
          <td className="px-6 py-4">
            {startup.startupaddress}
          </td>
          <td className="px-6 py-4">
            {startup.city}
          </td>
          <td className="px-6 py-4">
            {startup.state}
          </td>
          <td className="px-6 py-4">
            {startup.emailaddress}
          </td>
          <td className="px-6 py-4">
            {startup.phonenumber}
          </td>
          <td className="px-6 py-4">
            {startup.foundername}
          </td>
          <td className="px-6 py-4">
            {startup.industry}
          </td>
          <td className="px-6 py-4">
            {startup.sector}
          </td>
          <td className="px-6 py-4">
            {startup.businessidea}
          </td>
          <td className=' flex gap-4 ml-4'>
          <button onClick={() => handleEdit(startup._id)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => handleDelete(startup._id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
        </tr>
      ))}
    </tbody>
</table>
</div>

    </div>
  )
}

export default EntryTable