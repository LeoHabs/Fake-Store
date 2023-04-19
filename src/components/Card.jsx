import { useEffect, useState } from "react";

function Card({ title, price, description, category, image, rating, showing }) {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        showing ? setIsShowing(true) : setIsShowing(false);
    }, [showing]);

    return <>
        <div className="card" >
            <img className="card-image" src={image} ></img>
            <h3>{title}</h3>
            <div>
                <h4>{price.toString().replaceAll(".", ",")}€</h4>

            </div>

        </div>
    </>;
};

export default Card;