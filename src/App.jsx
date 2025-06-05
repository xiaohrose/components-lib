import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OperatorColumns from './components/operatorColumns'

// 示例数据
const demoData1 = [
  { text: 'Name', onClick: () => { } },
  { text: 'Age', onClick: () => { } },
  { text: 'Job', onClick: () => { } },
]

// 示例列定义
const demoData3 = [
  { text: 'Name', onClick: () => { } },
  { text: 'Age', onClick: () => { } },
  { text: 'Job', onClick: () => { } },
  { text: 'Job2', onClick: () => { } },
]

// Demo 组件
function OperatorColumnsDemo() {
  return (
    <div>
      <h2>OperatorColumns Demo 1</h2>
      <OperatorColumns actions={demoData1} record={{}} />

      <h2>OperatorColumns Demo 2</h2>
      <OperatorColumns actions={demoData3} record={{}} />
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <OperatorColumnsDemo></OperatorColumnsDemo>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
