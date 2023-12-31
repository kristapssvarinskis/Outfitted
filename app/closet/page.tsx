import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <div>  
    <div className="flex items-center justify-around p-5 text-2xl">
        <a href="../">Outfitted</a>
      <div>
      <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
    <div className="box-border h-1 w-100% border-black border-2"></div>
    <div className="flex items-start justify-center gap-6 text-2xl mt-8">
        <a href="">All</a>
        <a className="text-gray-400" href="./closet/Tops">Tops</a>
        <a className="text-gray-400" href="./closet/Pants">Pants</a>
        <a className="text-gray-400" href="./closet/Outerwear">Outerwear</a>
        <a className="text-gray-400" href="./closet/Shoes">Shoes</a>
        <a className="text-gray-400" href="./closet/Headwear">Headwear</a>
        <a className="text-gray-400" href="./closet/Accessories">Accessories</a>
    </div>
    <div className="box-border h-1 w-100% border-gray-300 mt-7 border-2"></div>
    <div className="flex items-center justify-center gap-2 mt-32">
        <div className="box-border h-40 w-32 p-4 border-2"></div>
        <div className="box-border h-40 w-32 p-4 border-2"></div>
        <div className="box-border h-40 w-32 p-4 border-2"></div>
        <div className="box-border h-40 w-32 p-4 border-2"></div>
        <div className="box-border h-40 w-32 p-4 border-2"></div>
    </div>
    <div className="flex items-center justify-center gap-2 mt-2">
        <div className="box-border h-40 w-32 p-4 border-2"></div>
        <div className="box-border h-40 w-32 p-4 border-2"></div>
        <div className="box-border h-40 w-32 p-4 border-2"></div>
        <div className="box-border h-40 w-32 p-4 border-2"></div>
        <div className="box-border h-40 w-32 p-4 border-2"></div>
    </div>
   </div>
   );
}    