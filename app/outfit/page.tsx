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
    <div className="flex items-center justify-center gap-2 mt-32">
        <div className="box-border h-80 w-48 p-4 border-2"></div>
        <div className="box-border h-80 w-48 p-4 border-2"></div>
        <div className="box-border h-80 w-48 p-4 border-2"></div>
        <div className="box-border h-80 w-48 p-4 border-2"></div>
        <div className="box-border h-80 w-48 p-4 border-2"></div>
    </div>
    <div className="flex items-center justify-center gap-2 mt-3">
        <div className="box-border h-80 w-48 p-4 border-2"></div>
        <div className="box-border h-80 w-48 p-4 border-2"></div>
        <div className="box-border h-80 w-48 p-4 border-2"></div>
        <div className="box-border h-80 w-48 p-4 border-2"></div>
        <div className="box-border h-80 w-48 p-4 border-2"></div>
    </div>
</div>
  );
}
