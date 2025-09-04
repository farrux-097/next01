import { memo } from 'react';

const User = async() => {
     const response = await fetch('https://dummyjson.com/users')
  const data = await response.json()
  return (
<div className="Page w-full">
        <div  className="w-full flex flex-wrap gap-4 mt-5">
          {
            data?.users?.map((item:any) =>(
              <div key={item.id} className="w-48 p-2 border border-slate-300 rounded shadow flex flex-col items-center">
                <div>
                  <img src={item.image} alt="adaasd" />
                  <div className='flex items-center gap-4'>
                  <h2>{item.firstName}</h2>
                  <h2>{item.lastName}</h2>  
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default memo(User);