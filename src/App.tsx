import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";

function App() {
  const { state, dispatch } = useBudget()

  return (
    <>
      <header className="bg-blue-400 py-8 px-3 max-h-72">
        <h1 className="text-center text-3xl upper text-white">Planificador de Gastos</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm dispatch={dispatch}/>
      </div>
    </>
  )
}

export default App
