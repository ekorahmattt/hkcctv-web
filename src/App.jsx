import ReactPlayer from "react-player"

function App() {

  return (
    <>
      <div className="overflow-hidden">
        <div className="w-full pt-3 md:flex md:px-5 md:items-center">
          <img className="w-1/2 pb-5 m-auto md:w-1/6 md:flex-2" src="/HK_CCTV_BW_LG.png" alt="logo"/>
          <p className="text-center text-4xl text-blue-500 font-bold md:flex-1 md:text-5xl">PESTA RAKYAT KALTIM 2025</p>
          
          <div className="flex justify-center gap-5 pt-3 md:flex-col md:flex-2">
            <p className="text-lg font-semibold"><span className="material-symbols-outlined text-blue-500">event</span>
            9-12 Januari 2025</p>
            <p className="text-lg font-semibold"><span className="material-symbols-outlined text-blue-500">location_on</span>
            Lapangan GOR Kadrie Oening Samarinda</p> 
          </div>
        </div>

        <div className="grid grid-cols-2 pt-5 px-5 gap-5">
          <div className="m-auto w-full">
            <p className="text-center text-xl font-semibold">MASUK</p>
            <div className="py-5 bg-slate-200 rounded-xl shadow-lg">
              <p className="text-center text-3xl font-digital font-bold text-blue-500">0</p>
            </div>
          </div>
          <div className="m-auto w-full">
            <p className="text-center text-xl font-semibold">KELUAR</p>
            <div className="py-5 bg-slate-200 rounded-xl shadow-lg">
              <p className="text-center text-3xl font-digital font-bold text-blue-500">0</p>
            </div>
          </div>
        </div>

        <div className="px-5 md:flex md:flex-wrap md: justify-center md:gap-5">
          <div className="pt-3">
            <p className="text-lg font-bold pb-2">Pintu Depan</p>
            <ReactPlayer 
              url={'https://www.youtube.com/watch?v=DOOrIxw5xOw'} 
              playing={true}
              loop={true}
            />
          </div>

          <div className="pt-3">
            <p className="text-lg font-bold pb-2">Pintu Depan</p>
            <ReactPlayer 
              url={'https://www.youtube.com/watch?v=DOOrIxw5xOw'} 
              playing={true}
              loop={true}
            />
          </div>

          <div className="pt-3">
            <p className="text-lg font-bold pb-2">Pintu Depan</p>
            <ReactPlayer 
              url={'https://www.youtube.com/watch?v=DOOrIxw5xOw'} 
              playing={true}
              loop={true}
            />
          </div>

          <div className="pt-3">
            <p className="text-lg font-bold pb-2">Pintu Depan</p>
            <ReactPlayer 
              url={'https://www.youtube.com/watch?v=DOOrIxw5xOw'} 
              playing={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
