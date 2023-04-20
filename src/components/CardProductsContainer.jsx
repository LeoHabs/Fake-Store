import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const getPageProducts = (list, page) => {
    const tempArray = Array.from(list);
    return tempArray.splice(page * 4, 4);
};

function CardProductsContainer() {
    const productsList = useSelector(state => state.products);
    const currentPage = useSelector(state => state.page);
    const [displayedList, setDisplayedList] = useState([]);

    useEffect(() => {
        setDisplayedList(getPageProducts(productsList, currentPage));
    }, [currentPage, productsList]);

    return <div className='products-container'>
        {displayedList.map((e) => {
            return <Card
                key={e.id}
                id={e.id}
                title={e.title}
                price={e.price}
                description={e.description}
                category={e.category}
                image={e.image}
                rating={e.rating}
            />
        })}
    </div>;
};

export default CardProductsContainer;