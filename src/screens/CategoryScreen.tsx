import { CategoryContainer, Category } from "../components"

export const CategoryScreen = () => {

  /**
   * * El categoryName debe de coincidir con la imagen 
   * * El color son los que estan en category.module.scss
  */

  return (
    <CategoryContainer>
      <Category categoryName="Books" color="redDark" id={10} />
      <Category categoryName="Videogames" color="violet" id={15} />
      <Category categoryName="Music" color="pinkDark" id={12} />
      <Category categoryName="Sports" color="pink" id={21} />
      <Category categoryName="Maths" color="blue" id={19} />
      <Category categoryName="Film" color="black" id={11} />
    </CategoryContainer>
  )
}
