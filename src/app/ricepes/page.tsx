import { memo } from 'react';

const Ricepes =  async() => {
   const response = await fetch('https://dummyjson.com/recipes')
  const data = await response.json()
  return (
<div className="Page w-full">
        <div  className="w-full flex flex-wrap gap-4 mt-5">
          {
            data?.recipes?.map((item:any) =>(
              <div key={item.id} className="w-48 p-2 border border-slate-300 rounded shadow flex flex-col items-center">
                <div>
                  <img src={item.image} alt="adaasd" />
                  <h2>{item.name}</h2>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default memo(Ricepes);