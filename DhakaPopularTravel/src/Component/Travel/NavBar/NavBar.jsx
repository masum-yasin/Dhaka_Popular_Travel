import React from 'react';
import '../../../Component/Travel/NavBar/NavBar.css'
import women from '../../../../public/image/download.jpg'
import bellring from '../../../../public/image/images.png'
const NavBar = () => {
    return (
        <>
        {/* Navbar Start */}
          <nav >
         <div className='flex gap-96 h-16 bg-gray-900 navbar row'>
        <div className='ml-60 col-lg-6'>
        <a href="">Dashboard</a>
        <a href="">Meter Price</a>
        <a href="">Custom Price</a>
        <a href="">Calender</a>
        <a href="">Reports</a>
</div>
          
     <div className='flex gap-4 col-lg-6'>
        <img className='w-6 rounded' src={women} alt=""  />
        <img className='w-6 rounded' src={bellring} alt=""  />
     </div>
        </div>
    </nav> 
     {/*Navbar Ending  */}
<div><h3 className='text-2xl font-bold ml-60'>Master Price</h3></div>
{/* Horizontal  */}
<div className='text-cyan-600'><hr /></div>
{/* Horizontal  */}
{/* Form Start */}
<div class="container mx-auto">
<form action="" className='mt-24'>
<div className='text-cyan-600'><hr /></div>
   <div className="row mt-3">
  <div>
  <input type="text" className='text-black-600 w-24 h-10 text-center' placeholder='LHR'/>&nbsp;&nbsp;
  <input type="text" className='text-black-600 w-24 h-10 text-center' placeholder='CDG'/>&nbsp;&nbsp;
  <input type="date" className='text-black-600 w-40 h-10 text-center' placeholder='LHR'/>&nbsp;&nbsp;

              <select className='text-black-600 w-24 h-10 text-center'>
                <option disabled selected>
                  Day
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
           
  </div>
   </div>
</form>
</div>

        </>
    );
};

export default NavBar;