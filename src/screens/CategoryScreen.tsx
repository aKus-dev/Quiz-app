import { CategoryContainer, Category } from "../components"

export const CategoryScreen = () => {

  return (
    <CategoryContainer>

      <Category categoryName="Books" color="redDark"/>
      <Category categoryName="Videogames" color="violet"/>
      <Category categoryName="Music" color="pinkDark"/>
      <Category categoryName="Sports" color="pink"/>
      <Category categoryName="Maths" color="blue"/>
      <Category categoryName="Film" color="black"/>

    </CategoryContainer>
  )
}
