export default function Logo (){
   return (
    <div className="flex items-center gap-2">
        <div className="flex gap-1">
            <span className="h-7 w-7 rounded-full bg-red-500"></span>
            <span className="h-7 w-7 rounded-full bg-green-500"></span>
            <span className="h-7 w-7 rounded-full bg-blue-500"></span>
        </div>
        <span className="font-black">AppJS</span>
    </div>
   )
}