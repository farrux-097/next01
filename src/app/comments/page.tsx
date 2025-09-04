import { memo } from 'react';

const Comments = async() => {
         const response = await fetch('https://dummyjson.com/comments')
  const data = await response.json()
  console.log(data)
  return (
<div className="Page w-full">
        <div  className="w-full flex flex-wrap gap-4 mt-5">
          {
            data?.comments?.map((item:any) =>(
              <div key={item.id} className="w-48 p-2 border border-slate-300 rounded shadow flex flex-col items-center">
                <div>
                  <div className='flex items-center gap-4'>
                  <h2>{item.body}</h2>
                  </div>
                  <h2><span className='text-red-600'>Likes</span> {item.likes}</h2>  
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default memo(Comments);
