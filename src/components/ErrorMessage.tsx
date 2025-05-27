import type { ReactNode } from "react"

type errorMessageProps =  {
    children: ReactNode
}

const ErrorMessage = ({children}: errorMessageProps) => {
    return(
        <p className="bg-red-400 p-2 text-white flex justify-center">{children}</p>
    )
}

export default ErrorMessage