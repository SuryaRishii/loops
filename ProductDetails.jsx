date:19-03-2025


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./CartContext";
import "./ProductDetails.css";
import {Link} from "react-router-dom";
import "./CartIcon.css";

const ProductDetails = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { addToCart, cart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(http://localhost:9000/${type})
            .then(res => {
                const item = res.data.find(prod => prod.id === parseInt(id));
                setProduct(item);
            });
    }, [type, id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-details">
            {/* Cart Icon at Top Right */}
            <Link to="/cart" className="cart-icon">
                🛒 ({cart.length})
            </Link>

            {/* Back Button */}
            <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

            <img src={product.pimage} alt={product.pname} />
            <h2><i className="fa fa-rupee"></i> {product.pcost}</h2>
            <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span> {quantity} </span>
                <button onClick={() => setQuantity(Math.min(product.pqty, quantity + 1))}>+</button>
            </div>
            <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;




//cartlon.css
/* Cart Icon Positioned at Top-Right */
.cart-icon {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

.cart-icon:hover {
    color: #007bff;
}

/* Cart Count Superscript */
.cart-icon .cart-count {
    position: absolute;
    top: -8px;
    right: -10px;
    font-size: 14px;
    color: red;
    font-weight: bold;
    background: white;
    border-radius: 50%;
    padding: 2px 6px;
    border: 1px solid red;
}

//common.css
/* Back Button Styling */
.back-button {
    background: #ff4d4d;
    color: white;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
    margin-bottom: 10px;
}

.back-button:hover {
    background: #cc0000;
}

//Dashboard.css

.dashboard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #f8f9fa;
    min-height: 100vh;
}

.dashboard-nav {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.dashboard-nav a {
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    background: #007bff;
    color: white;
    font-size: 16px;
    transition: background 0.3s;
}

.dashboard-nav a:hover {
    background: #0056b3;
}

.dashboard-content {
    width: 100%;
    display: flex;
    justify-content: center;
}

//Login.css

.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #f4f4f4;
}

.login-box {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

.login-box input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-box button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.login-box button:hover {
    background: #0056b3;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
}


//ProductDetails.css

.product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: auto;
}

.product-details img {
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: contain;
    border-radius: 10px;
}

.product-details h2 {
    font-size: 20px;
    color: #333;
    margin: 10px 0;
}

.product-details .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}

.product-details button {
    padding: 8px 15px;
    font-size: 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.product-details button:hover {
    background: #0056b3;
}
