import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getShopifyImage } from "gatsby-source-shopify";

// CSS here
import * as style from "./Product.module.css";

const Product = (props) => {
    
    const image = getShopifyImage({
        image: props.images[0],
        height: 250,
        width: 310,
    });

    return (
        <div className={style.product}> 
            <div className={style.image}>
                <GatsbyImage image={image} alt="store-product" />
            </div>
            <div className={style.title}>
                {props.title}
            </div>
            <div className={style.createdAt}>
                {props.createdAt}
            </div>
        </div>
    );
}

export default Product;