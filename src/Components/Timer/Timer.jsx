import './Timer.css'
import rightArrow from '../../assets/arrow-right.svg'
import pauseimg from '../../assets/pause.svg'
import stop from '../../assets/stop.svg'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [startTimer, setStartTimer] = useState(false)
    const [time, setTime] = useState(0)
    const [intervalId, setIntervalId] = useState(null)
    const [isPaused, setIsPaused] = useState(false)

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const start = () => {
        setStartTimer(true)
        setIsPaused(false)
        const id = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)
        setIntervalId(id)
    }

    const pause = () => {
        clearInterval(intervalId)
        setStartTimer(true)
        setIsPaused(true)
    }

    const reset = () => {
        clearInterval(intervalId)
        setStartTimer(false)
        setTime(0)
        setIsPaused(false)
    }

    useEffect(() => {
        return () => clearInterval(intervalId) // Cleanup interval on component unmount
    }, [intervalId])

    return (
        <div className='timer'>
            {startTimer
                ?
                <>
                    <p>{formatTime(time)}</p>
                    {isPaused
                        ? <img onClick={start} src={rightArrow} alt="Start" />
                        : <img onClick={pause} src={pauseimg} alt="Pause" />
                    }
                    <img onClick={reset} src={stop} alt="Stop" />
                </>
                :
                <>
                    <p>Start Time Tracker</p>
                    <img onClick={start} src={rightArrow} alt="Start" />
                </>
            }
        </div>
    )
}

export default Timer
