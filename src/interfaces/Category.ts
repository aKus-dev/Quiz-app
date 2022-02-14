
export interface CategoryProps {
    id:number;
    categoryName: Categories;
    color: Colors;
}

export type Categories = 
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

