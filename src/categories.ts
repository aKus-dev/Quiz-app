import { CategoryProps } from './interfaces/Category';


/**
 * * El categoryName debe de coincidir con la imagen 
 * * El color son los que estan en category.module.scss
 * * El id lo saco de opentdb
*/


export const categories: CategoryProps[] = [
    {
        categoryName: 'Books',
        color: 'redDark',
        id: 10
    },
    {
        categoryName: 'Videogames',
        color: 'violet',
        id: 15
    },
    {
        categoryName: 'Music',
        color: 'pinkDark',
        id: 12
    },
    {
        categoryName: 'Sports',
        color: 'pink',
        id: 21
    },
    {
        categoryName: 'Geography',
        color: 'red',
        id: 22
    },

    {
        categoryName: 'Film',
        color: 'black',
        id: 11
    },

    {
        categoryName: 'Maths',
        color: 'blue',
        id: 19
    },
    {
        categoryName: 'Computers',
        color: 'aqua',
        id: 18
    },
    {
        categoryName: 'Science',
        color: 'skyblue',
        id: 17
    }
];
