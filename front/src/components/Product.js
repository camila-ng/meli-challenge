import React, { useEffect, useState } from 'react'
import './styles/Products.scss'
const Product = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/")
            .then(res => res.json())
            .then(
                (response) => {
                    setItems(response.data.results);
                    console.log(response)
                },

                (error) => {

                }
            )
    }, [])

    return (
        <div className="products-results">
            {
                items.map(item => (
                    <div className="product-container" key={item.id}>
                        <section className="product-section">
                            <img className="product-image" src={item.thumbnail} alt={item.title} />
                            <div className="title-price-container">
                                <p className="product-price">${item.price}</p>
                                <h1 className="product-title">{item.title}</h1>
                            </div>
                        </section>
                        <div className="product-adress">
                            <p>{item.address.state_name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Product
