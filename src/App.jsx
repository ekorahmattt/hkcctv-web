import ReactPlayer from "react-player/youtube"

function App() {

  return (
    <>
      <div className="overflow-hidden">
        <div className="w-full pt-3">
          <img className="w-1/2 m-auto" src="/HK_CCTV_BW_LG.png" alt="logo"/>
          <p><span className="material-symbols-outlined">location_on</span></p>
        </div>

        <div className="grid grid-cols-2 pt-5 px-5 gap-3">
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

        <div>
          <ReactPlayer 
            url={'https://www.youtube.com/watch?v=DOOrIxw5xOw'} 
            playing={true}
            loop={true}
            className='px-5 pt-5'
          />
          <ReactPlayer 
            url={'https://www.youtube.com/watch?v=DOOrIxw5xOw'} 
            playing={true}
            loop={true}
            className='px-5 pt-5'
          />

          {/* <ReactPlayer 
            url={'https://www.youtube.com/watch?v=DOOrIxw5xOw'} 
            playing={true}
            loop={true}
            className='px-5 pt-5'
          /> */}
        </div>
      </div>
    </>
  )
}

export default App
