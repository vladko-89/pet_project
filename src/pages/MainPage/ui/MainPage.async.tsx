import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Иметация замедления загрузки
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
