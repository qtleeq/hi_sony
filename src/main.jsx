import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA = [
  { id: "todo-0", name: "Get Job", completed: false },
  { id: "todo-1", name: "Learn React", completed: true },
  { id: "todo-2", name: "Learn Spring Boot", completed: false },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
)
