import { LOADING, PRODUCTS_SUCCESS, FAIL, CATEGORIES_SUCCESS, INCREASE_PAGE, DECREASE_PAGE } from "./types";

export const initialState = {
    products: [],
    categories: [],
    page: 0
}

export const reducer = (state = initialState, action) => {
    const { type, value } = action;
    console.log(type)
    switch (type) {
        case PRODUCTS_SUCCESS:
            return { ...state, products: value };
        case CATEGORIES_SUCCESS:
            return { ...state, categories: value };
        case DECREASE_PAGE:
            if (state.page === 0) {
                return;
            }
            return { ...state, page: state.page - 1 };
        case INCREASE_PAGE:
            if (state.page === 3) {
                return;
            }

            return { ...state, page: state.page + 1 };
        default:
            return state;
    }
}