import { useState } from "react"

export const UseForm = (dato) => {
    const [value_input, setinput] = useState(dato)

    const get_value_input = ({target}) => {

        setinput({
            ...value_input,
            [target.name] : target.value,
            
        })

    }

    

    const reset = () => {

        setinput({
            ...dato
        })
    }

    

    return {
        value_input,
        get_value_input,
        reset,
        

    }
}