import React from 'react';
import styles from "./Card.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({product}) => {
  return (
    <div className={styles.card}>
        <div className={styles.productImage}>
            <img height={"100%"} width="100%" src={product.thumbnail} alt="" />
        </div>
        {/* Details */}
        <div className={styles.details}>
            <p>{product.name}</p>
            <p>{product.slug}</p>
            <p><span className={styles.cancelledPrice}>Rs {product.price}</span> <span> {product.display_price}</span></p>
            <p>In stock {product.minimum_quantity}</p>
        </div>
        <BsThreeDotsVertical/>

    </div>
  )
}

export default Card