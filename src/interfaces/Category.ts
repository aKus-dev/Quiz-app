
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
    | 'Computers'
    | 'Geography'
    | 'Science'


type Colors = 
    | 'pink'
    | 'pinkDark'
    | 'redDark'
    | 'violet'
    | 'blue'
    | 'black'
    | 'aqua'
    | 'red'
    | 'skyblue'

