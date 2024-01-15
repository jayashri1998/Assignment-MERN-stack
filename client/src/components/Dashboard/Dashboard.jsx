import {useState} from 'react'
import Navbar from './Navbar'
import PopForm from './PopForm'
import EntryTable from './EntryTable';

const Dashboard = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleAddStartupClick = () => {
        setPopupVisible(true);
      };
    
      const handleClosePopup = () => {
        setPopupVisible(false);
      };
      const handleFormSubmit = (startupData) => {
        console.log('Submitted:', startupData);
       
      };

     
  return (
    <div>
    <Navbar/>
    <div className='mt-4 flex' >
    <div className='border-b-4 flex  w-fit border-r-4 gap-4 text-lg font-bold ' style={{height:'100vh'}}>
    <div >
    <span className='mx-4  ' >Startups</span>
    </div>
    <div className='mt-2'>
    <svg fill="#000000" height="10px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
    </div>
    <img src=''/>
    </div>
    <div className='mx-6'>
    <h1 className=' text-lg font-bold'>Start-Up List</h1>
    <div className='my-12 flex gap-8 justify-between' >
    <form >   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
<button className='bg-blue-500 text-white font-medium rounded-lg text-sm px-4 py-2 mr-48 h-16 w-48'
onClick={handleAddStartupClick}>Add Start-Up</button>
{isPopupVisible && (
       <PopForm onClose={handleClosePopup} onSubmit={handleFormSubmit} className='mr-48'/>
      )}

</div>

  <EntryTable/>
    </div>
    </div>
    </div>
  )
}

export default Dashboard