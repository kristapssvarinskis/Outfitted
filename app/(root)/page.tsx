import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <div>  
    <div className="flex items-center justify-around p-5 text-2xl">
        <a href="">Outfitted</a>
      <div>
      <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
    <div className="box-border h-1 w-100% border-black border-2"></div>
    <div className="grid items-center justify-around mt-56">
      <div className="grid grid-cols-2 place-items-center h-80 w-80 p-4 rounded-2xl border-4 border-black">
        <img className="w-32 aspect-square" src="https://www.racerworldwide.net/cdn/shop/files/black_front_white_470x.jpg?v=1695840097"></img>
        <img className="w-32 aspect-square" src="https://www.racerworldwide.net/cdn/shop/products/whitefront_3e21e05d-573d-4dc7-aebe-6cf18092f6bc_470x.jpg?v=1667933280"></img>
        <img className="w-32 aspect-square" src="https://www.racerworldwide.net/cdn/shop/files/grhoodie_front_white_470x.jpg?v=1691428731"></img>
        <img className="w-32 aspect-square" src="https://www.racerworldwide.net/cdn/shop/files/jg_front_white_470x.jpg?v=1698856971"></img>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <button className="box-border h-10 border-2 border-black rounded-lg flex items-center justify-items-center mt-3"><a className="mx-2" href="./closet">Closet</a></button>
    </div>
    <button></button>
  </div>
  );
}
