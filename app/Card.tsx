export default function Menu() {
  return (
      <div className="max-lg:hidden flex flex-col w-[20rem] h-[26rem] items-center
       bg-zinc-900/90 shadow-[14px_20px_80px_10px_#1a202c] rounded-[1rem]
       -skew-x-6
       ">
        <div className="flex justify-between items-center gap-4 mt-4 ml-8 mb-8 mr-8  ">
          <div className=" w-20 h-20 bg-stone-850 shadow-[20px_14px_40px_10px_#1a202c] shadow-black/60 rounded-2xl duration-500 hover:scale-110">
          </div>
            <div className="sub-infos">
              <div className=" mt-2 w-[10rem] h-[2rem] bg-stone-850 rounded-2xl shadow-[20px_14px_40px_10px_#1a202c] shadow-black/70 duration-500 hover:scale-110"></div>
              <div className=" mt-2 w-[10rem] h-[2rem] bg-stone-850 rounded-2xl shadow-[20px_14px_40px_10px_#1a202c] shadow-black/70 duration-500 hover:scale-110"></div>
            </div>
        </div>
          <div className="mt-2 w-[16rem] h-[4rem] bg-stone-850 rounded-2xl shadow-[20px_14px_40px_10px_#1a202c] shadow-black/70 duration-500 hover:scale-110"></div>
          <div className="mt-2 w-[16rem] h-[4rem] bg-stone-850 rounded-2xl shadow-[20px_14px_40px_10px_#1a202c] shadow-black/70 duration-500 hover:scale-110"></div>
          <div className="mt-2 w-[16rem] h-[4rem] bg-stone-850 rounded-2xl shadow-[20px_14px_40px_10px_#1a202c] shadow-black/70 duration-500 hover:scale-110"></div>
        </div>
  )
}