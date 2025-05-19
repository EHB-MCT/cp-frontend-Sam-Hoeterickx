import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './modules/App/components/Root'

//CSS
import './index.scss'
import './styles/main.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
