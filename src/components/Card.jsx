import { useState } from "react";
import ProductModal from "./ProductModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDetailProd, setDetailStatus } from "../redux/actions";

function Card({ title, price, description, category, image, rating }) {
    const dispatch = useDispatch();
    const buildObj = {
        title,
        price,
        description,
        category,
        image,
        rating
    };

    const handleClick = () => {
        dispatch(setDetailProd(buildObj));
    }

    return <>
        <div className="card">
            <img alt={title} className="card-image" src={image} onClick={() => handleClick()} />
            <h3>{title}</h3>
            <div>
                <h4>{price.toString().replaceAll(".", ",")}€</h4>
            </div>
        </div>
    </>;
};

export default Card;