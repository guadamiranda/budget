import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import { useMemo } from "react";

function App() {
  const { state } = useBudget()

  const isValidBudget = useMemo(() => state.budget === 0, [state.budget])

  return (
    <>
      <header className="bg-blue-400 py-8 px-3 max-h-72">
        <h1 className="text-center text-3xl upper text-white">Planificador de Gastos</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetForm/> : <BudgetTracker />}
      </div>

      {!isValidBudget && (
        <div className="max-w-3xl mx-auto py-10" >
          <ExpenseList />
          <ExpenseModal>
            <ExpenseForm />
          </ExpenseModal>
        </div>
    )}

    </>
  )
}

export default App
