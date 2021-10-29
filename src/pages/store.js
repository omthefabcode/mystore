import * as React from "react";
import { graphql } from "gatsby";

import Container from "../components/Container";
import Product from "../components/Product";

// CSS comes here
import * as style from "./store.module.css";


const StorePage = (props) => {

    const products = props.data.allShopifyProduct.nodes.map(product => {
        const {id, title, createdAt, images} = product;
        return <Product
            key={id}
            title={title}
            createdAt={createdAt}
            images={images}
        />
    });

    return (
        <Container>
            <h1>My Store</h1>
            <hr />
            <div className={style.storeWrapper}>
                {products}
            </div>
        </Container>
    );
};

export const query = graphql`
query {
    allShopifyProduct {
        nodes {
            id
            title
            createdAt(formatString: "MMMM DD, YYYY")
            images {
                id
                originalSrc
            }
        }
    }
}
`;

export default StorePage;