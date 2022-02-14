
export interface CategoryProps {
    categoryName: Categories;
    color: Colors;
}

type Categories = 
    | 'Books'
    | 'Film'
    | 'Maths'
    | 'Music'
    | 'Sports'
    | 'Videogames'


type Colors = 
    | 'pink'
    | 'pinkDark'
    | 'redDark'
    | 'violet'
    | 'blue'
    | 'black'

