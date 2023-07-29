import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  {/* ====== Script ---> Cronômetro ====== */}
  {/* Variáveis para o contador */}
  let [hours] = useState(0)
  let [minutes] = useState(0)
  let [seconds] = useState(0)
  let [milliseconds] = useState(0)
  let [countInterval] = useState(null)
  
  {/* Criando tempo do cronômetro de forma dinâmica */}
  const createTime = () => {
    const hoursElement = document.getElementById("hours")
    const minutesElement = document.getElementById("minutes")
    const secondsElement = document.getElementById("seconds")
    const millisecondsElement = document.getElementById("milliseconds")
    hoursElement.textContent = hours + "0"
    minutesElement.textContent = minutes + "0"
    secondsElement.textContent = seconds + "0"
    millisecondsElement.textContent = milliseconds + "00"
  }
  useEffect(() => {
    createTime()
  }, [])

  {/* Primeira condição para o contador */}
  const addFirstCondition = (value) => value < 10? "0" + value : value
  {/* Segunda condição para o contador */}
  const addSecondCondition = (value) => value < 100? "0" + value : value
  
  {/* Função para o contador */}
  const Counter = () => {
    const hoursElement = document.getElementById("hours")
    const minutesElement = document.getElementById("minutes")
    const secondsElement = document.getElementById("seconds")
    const millisecondsElement = document.getElementById("milliseconds")
    if((milliseconds += 10) === 1000) {
      seconds ++
      milliseconds = 10
    }
    if(seconds === 60) {
      minutes ++
      seconds = 0
    }
    if(minutes === 60) {
      hours ++
      minutes = 0
    }
    hoursElement.textContent = addFirstCondition(hours)
    minutesElement.textContent = addFirstCondition(minutes)
    secondsElement.textContent = addFirstCondition(seconds) 
    millisecondsElement.textContent = addSecondCondition(milliseconds) 
  }

  {/* Função para controlar o contador */}
  const counterControl = () => {
    clearInterval(countInterval)
  }

  {/* Iniciar cronômetro */}
  const startCounter = () => {
    counterControl()
    countInterval = setInterval(Counter, 10)
  }

  {/* Pausar cronômetro */}
  const pauseCounter = () => {
    clearInterval(countInterval)
  }

  {/* Parar cronômetro */}
  const stopCounter = () => {
    const hoursElement = document.getElementById("hours")
    const minutesElement = document.getElementById("minutes")
    const secondsElement = document.getElementById("seconds")
    const millisecondsElement = document.getElementById("milliseconds")
    clearInterval(countInterval)
    countInterval = null
    hours = 0
    minutes = 0
    seconds = 0
    milliseconds = 0
    hoursElement.textContent = addFirstCondition(hours)
    minutesElement.textContent = addFirstCondition(minutes)
    secondsElement.textContent = addFirstCondition(seconds)
    millisecondsElement.textContent = addSecondCondition(milliseconds) + "0"
  }

  {/* ====== Script ---> Data ====== */}
  {/* Criando os dias da semana */}
  const daysArray = ["Sunday", "Monday", "Tuesday", 
  "Wednesday", "Thursday", "Friday", "Saturday"]
  {/* Criando os mesês do ano */}
  const monthsArray = ["January", "February", "March", 
  "April", "May", "June", "July", "August", "September", 
  "October", "November", "December"]

  {/* Função para obter a data atual do sistema */}
  const getDate = () => {
    const dayElement = document.getElementById("day")
    const dateElement = document.getElementById("date")
    const monthElement = document.getElementById("month")
    const yearElement = document.getElementById("year")
    const now = new Date()
    const day = now.getDay()
    const date = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    dayElement.textContent = daysArray[day] + ", "
    dateElement.textContent = date + ", "
    monthElement.textContent = monthsArray[month] + " "
    yearElement.textContent = year
  }
  useEffect(() => {
    getDate()
  }, [])

  return (
    <>
      <section className='container'>
        <div className="title">
          <h1>Stopwatch</h1>
        </div>{/* End title */}
        <main className='time-content'>
          <div className="time">
            <h2 id='hours'></h2>
            <small>Hours</small>
          </div>{/* End time */}
          <div className="time">
            <h2 id='minutes'></h2>
            <small>Minutes</small>
          </div>{/* End time */}
          <div className="time">
            <h2 id='seconds'></h2>
            <small>Seconds</small>
          </div>{/* End time */}
          <div className="time">
            <h2 id='milliseconds'></h2>
            <small>Milliseconds</small>
          </div>{/* End time */}
        </main>{/* End time content */}
        <div className="buttons">
          <button onClick={startCounter} 
          type='button'>Start</button>
          <button onClick={pauseCounter} 
          type='button'>Pause</button>
          <button onClick={stopCounter} 
          type='button'>Stop</button>
        </div>{/* End buttons */}
        <div className="date-content">
          <span id='day'></span>
          <span id='month'></span>
          <span id='date'></span>
          <span id='year'></span>
        </div>{/* End date content */}
      </section>{/* End container */}
    </>
  )
}