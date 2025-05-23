import { formatCurrency } from "../helpers"

type amountDisplayProps = {
    label: string,
    amount: number
} 
const AmountDisplay = ({label, amount} : amountDisplayProps) => {
    return (
        <p className="text-2xl flex justify-between border-b pb-2 border-orange-300">
            <span className="text-orange-300">{label}</span>
            <span className="text-3xl">{formatCurrency(amount)}</span>
        </p>
    )
}

export default AmountDisplay