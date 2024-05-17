import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    function Exercise() {
        // EJERCICIO 2 SUMA 8
        if (count + 8 <= 200) {
            setCount((prevCount) => prevCount + 8)
        } else {
            setCount(200)
        }
    }

    function Exercise8() {
        // EJERCICIO 2 Resta 8
        if (count - 8 >= -200) {
            setCount((prevCount) => prevCount - 8)
        } else {
            setCount(-200)
        }
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <h3>count is cente {count}</h3>
                <button onClick={() => setCount((count) => count + 1)}>
                    + Aumentar
                </button>

                <button onClick={() => setCount((count) => count - 1)}>
                    - Restar
                </button>

                <button onClick={Exercise}>+ Sumar 8</button>

                <button onClick={Exercise8}>- Restar 8</button>
            </div>

            <p className="read--docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
