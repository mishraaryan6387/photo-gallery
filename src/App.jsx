import Gallery from "./components/Gallery";
import './App.css'

function App() {

  return (
    <div className='min-h-screen'>
      <header className ="border-b border-slate-200 bg-white">
       <div className='mx-auto max-w-7xl px-5 py-6 sm:px-8'>
         <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Photo Gallery
          </h1>
       <p className='mt-1 text-sm text-slate-500'>
       Explore photos and save your favourites.
       </p>
       </div>
     
      </header>
      <main>
        <Gallery/>
      </main>

    </div>
  
  )
}

export default App
