import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
  return (
    <header  className="w-full h-[50px] bg-gray-300 p-7  ">
      <div className='flex justify-center gap-4'>
          <Link href={"/products"}>Products</Link>
          <Link href={"/comments"}>Comments</Link>
          <Link href={"/user"}>Users</Link>
          <Link href={"/ricepes"}>Ricepes</Link>
      </div>
    
    </header>
  );
};

export default memo(Header);