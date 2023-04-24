import { PRODUCTS_SUCCESS, LOADING, FAIL, CATEGORIES_SUCCESS, INCREASE_PAGE, DECREASE_PAGE, SET_DETAIL_PROD, SET_DETAIL_STATUS } from "./types"

export const fetchProducts = (dispatch) => {
    dispatch({
        type: LOADING,
    });

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => dispatch({
            type: PRODUCTS_SUCCESS,
            value: res
        }))
        .catch("Error");
}

export const fetchCategories = (dispatch) => {
    dispatch({
        type: LOADING,
    });

    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(res => dispatch({
            type: CATEGORIES_SUCCESS,
            value: res
        }))
        .catch("Error");
}

export const increaseProdPage = (dispatch) => {
    dispatch({
        type: INCREASE_PAGE,
        value: null
    });
}

export const decreaseProdPage = (dispatch) => {
    dispatch({
        type: DECREASE_PAGE,
        value: null
    });
}

export const setDetailProd = (obj) => {
    return ({
        type: SET_DETAIL_PROD,
        value: obj
    });
}

export const setDetailStatus = (status) => {
    return ({
        type: SET_DETAIL_STATUS,
        value: status
    });
}