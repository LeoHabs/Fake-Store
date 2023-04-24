import CardProductsContainer from "../components/CardProductsContainer";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { increaseProdPage, decreaseProdPage } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "../components/ProductModal";

function Home() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.detailStatus);

    return <>
        <ProductModal />
        <div className="home-content">
            <div className="banner">
                <img alt="Bodyshot of four models wearing casual fashion" src="https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg"></img>
            </div>
            <div className="main-content">
                <button className="page-btn" onClick={() => dispatch(decreaseProdPage)}>
                    <HiOutlineChevronLeft size={20} />
                </button>
                <CardProductsContainer />
                <button onClick={() => dispatch(increaseProdPage)} className="page-btn">
                    <HiOutlineChevronRight size={20} />
                </button>
            </div>
        </div>
    </>
}

export default Home;