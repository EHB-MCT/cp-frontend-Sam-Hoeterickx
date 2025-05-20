import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './modules/App/components/Root'

//CSS
import './index.scss'
import './styles/main.scss'

console.log("Hello World!");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
