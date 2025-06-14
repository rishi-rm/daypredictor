import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const date = new Date()
  let today = date.getDay()
  let tomorrow = days[(today + 1) % 7]

  const [show, setShow] = useState(false)

  const clickToShow = () => {
    setShow(true)
    if(tomorrow==='Sunday'){
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
  }

  return (
    <div className='h-screen w-screen bg-white flex flex-col items-center justify-center overflow-hidden'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className="font-bold text-black text-4xl text-center mb-4">Day Predictor</h1>
        <p className='mb-16'>Discover what day tomorrow will be</p>

        <button
          className="bg-blue-500 text-white p-4 rounded-xl shadow-xl hover:bg-blue-600 text-xl font-bold"
          onClick={clickToShow}
        >
          Predict Tomorrow
        </button>

        <div className={`mt-16 w-[400px] h-[150px] rounded-xl shadow-2xl text-center p-4 bg-white transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
        `}>
          <p className='mt-2'>Tomorrow will be:</p>
          <h1 className='mt-4 text-blue-500 text-2xl font-bold'>{tomorrow}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
