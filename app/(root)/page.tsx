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
      <div className="grid grid-cols-2 place-items-center h-80 w-80 p-4 rounded-2xl border-4 border-gray-300 bg-gray-50">
        <img className="flex items-center justify-around ml-36" src="closeticon1.svg"></img>
      </div>
    </div>
    <div className="flex justify-center items-center gap-10">
      <button className="box-border h-10 border-2 border-gray-300 bg-gray-200 rounded-lg flex items-center justify-items-center mt-3"><a className="mx-2" href="./closet">Add clothes</a></button>
      <button className="box-border h-10 border-2 border-gray-300 bg-gray-200 rounded-lg flex items-center justify-items-center mt-3"><a className="mx-2" href="./closet">Closet</a></button>
      <button className="box-border h-10 border-2 border-gray-300 bg-gray-200 rounded-lg flex items-center justify-items-center mt-3"><a className="mx-2" href="./outfit">Outfit</a></button>
      <button className="box-border h-10 border-2 border-gray-300 bg-gray-200 rounded-lg flex items-center justify-items-center mt-3"><a className="mx-2" href="./closet">Create idea</a></button>
    </div>
    <button></button>
  </div>
  );
}
