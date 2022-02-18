import { CategoryContainer, Category } from "../components"
import { categories } from '../categories';

export const CategoryScreen = () => {
  return (
    <CategoryContainer>
      {
        categories.map(({ categoryName, color, id }) => (
          <Category key={id} categoryName={categoryName} color={color} id={id} />
        ))
      }
    </CategoryContainer>
  )
}
