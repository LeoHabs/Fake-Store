import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle, AiTwotoneStar } from "react-icons/ai";
import { setDetailProd } from "../redux/actions";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCartPlusFill } from "react-icons/bs";

function ProductModal() {
    const product = useSelector(state => state.detailProd);
    const dispatch = useDispatch();

    return <>
        <div className={product ? "overlay" : "hidden"}>
            <div className={product ? "product-modal" : "product-modal-hide"}>
                <div className="modal-content">
                    <button className="close-button" onClick={() => dispatch(setDetailProd(null))}>
                        <AiFillCloseCircle size={30} />
                    </button>
                    <img alt="Product" src={product?.image}></img>
                    <div className="modal-product-info">
                        <h2>{product?.title}</h2>
                        <div className="custom-line"></div>
                        <h3>Price:
                            <span>  {product?.price.toString().replaceAll(".", ",")}€</span>
                        </h3>
                        <h3>
                            Rating:
                            <span>  {product?.rating.rate}
                                <AiTwotoneStar size={20} color={"goldenrod"} />
                            </span>
                        </h3>
                        <h3>
                            Reviews:
                            <span>  {product?.rating.count}
                                <HiOutlineUserGroup size={20} />
                            </span>
                        </h3>
                        <div className="button-block">
                            <span>Size:</span>
                            <button className="size-button">L</button>
                            <button className="size-button">M</button>
                            <button className="size-button">S</button>
                            <button className="cart-button">
                                Add to cart
                                <BsCartPlusFill size={28}></BsCartPlusFill>
                            </button>
                        </div>
                        <h4 className="modal-description">
                            <span>
                                Description:
                            </span>
                            {product?.description}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductModal;