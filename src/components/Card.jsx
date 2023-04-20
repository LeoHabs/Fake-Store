function Card({ title, price, description, category, image, rating }) {

    return <>
        <div className="card">
            <img className="card-image" src={image} ></img>
            <h3>{title}</h3>
            <div>
                <h4>{price.toString().replaceAll(".", ",")}€</h4>
            </div>

        </div>
    </>;
};

export default Card;