import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import { AiFillStar } from "react-icons/ai";

function CategoryPage() {
    const params = useParams();
    const categoryType = params.category;
    const productsList = useSelector(state => state.products);

    const getCategory = (categoryType) => {
        switch (categoryType) {
            case "womenswear":
                return "women's clothing";
            case "menswear":
                return "men's clothing";
            case "electronics":
                return "electronics";
            case "jewelery":
                return "jewelery";
            default:
                return "";
        }
    };

    const getCategoryItems = (categoryType, productsList) => {
        return productsList.filter(e => e.category === getCategory(categoryType));
    };

    return <div className="category-list">
        {getCategoryItems(categoryType, productsList).map(e => {
            return <div className="product-detailed" onClick>
                <img src={e.image}></img>
                <div className="product-detailed-firstcontent">
                    <h4>{e.title}</h4>
                    <div className="number-details">
                        <h5>{e.price.toString().replaceAll(".", ",")}€</h5>
                        <div className="reviews">
                            <AiFillStar color="goldenrod" />
                            <h5>{e.rating.rate}</h5>
                            <h5>Reviews:{e.rating.count}</h5>
                        </div>
                    </div>
                    <h6><span>Description:</span>{e.description}</h6>
                </div>
            </div>
        })}
    </div>
}

export default CategoryPage;