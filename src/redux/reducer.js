import { LOADING, PRODUCTS_SUCCESS, FAIL, CATEGORIES_SUCCESS, INCREASE_PAGE, DECREASE_PAGE, SET_DETAIL_PROD, SET_DETAIL_STATUS } from "./types";

export const initialState = {
    products: [],
    categories: [],
    page: 0,
    detailStatus: false,
    detailProd: null
}

export const reducer = (state = initialState, action) => {
    const { type, value } = action;
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
        case SET_DETAIL_PROD:
            return { ...state, detailProd: value };
        default:
            return state;
    }
}