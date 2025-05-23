import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="Gráfico de Gastos"></img>
            </div>

            <div className="flex flex-col justify-center items-enter gap-8">
                <button
                    type="button"
                    className="bg-orange-200 w-full py-2 cursor-pointer hover:bg-orange-300"
                >
                    Resetear App
                </button>

                <AmountDisplay 
                    label="Presupuesto"
                    amount= {300}
                />

                <AmountDisplay 
                    label="Disponible"
                    amount= {100}
                />

                <AmountDisplay 
                    label="Gastado"
                    amount= {200}
                />
            </div>
        </div>
    )
}

export default BudgetTracker