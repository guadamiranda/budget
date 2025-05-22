import { BudgetProvider } from './context/BudgetContext.tsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </StrictMode>,
)
