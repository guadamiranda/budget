import type { ChangeEvent } from "react";
import { categories } from "../db/db";
import { useBudget } from "../hooks/useBudget";

const FilterByCategory = () => {
    const { dispatch } = useBudget()

    const handleCategoryChange = (event : ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'filter-category', payload: {filterCategoryId: event.target.value}})
    }

    return(
        <div className="bg-white shadow-lg rounded-lg p-10 mb-10">
            <form>
                <div className="flex flex-col">
                    <label className="text-slate-400 mb-3">Filtrar Gastos</label>
                    <select className="bg-slate-200 px-2 py-2" onChange={handleCategoryChange}>
                        <option value="">--Todas las Categorías--</option>
                        {categories.map(category => <option value={category.id} >{category.name}</option>)}
                    </select>
                </div>

            </form>
        </div>
    )
}

export default FilterByCategory