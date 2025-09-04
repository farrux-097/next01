
import { memo } from 'react';

const Products = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  console.log(data)
  return (
    <div className="Page w-full">
        <div  className="w-full flex flex-wrap gap-4 mt-5">
          {
            data?.products?.map((item:any) =>(
              <div key={item.id} className="w-48 p-2 border border-slate-300 rounded shadow flex flex-col items-center">
                <div>
                  <img src={item.thumbnail} alt="" />
                  <h2>{item.title}</h2>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default memo(Products);