import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"

// TODO Hacer petición a la API con los datos del context

export const Quiz = () => {

    const { difficulty, category } = useContext(QuizContext);

    console.log(difficulty, category)

  return (
    <div>

    </div>
  )
}
