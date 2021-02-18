import React from "react"
import {
    ProductsContainer,
    ProductsHeading,
    ProductsWraper,
    ProductsCard,
    ProductsImg,
    ProductsInfo,
    ProductsTitle,
    ProductsDesc,
    ProductsPrice,
    ProductsButton
} from "./ProductsElements"

const Products = ({ heading, data }) => {
    return(
        <ProductsContainer>
            <ProductsHeading>
                {heading}
            </ProductsHeading>
            <ProductsWraper>
                {data.map((product, index) => {
                    return (
                        <ProductsCard key={index}>
                            <ProductsImg src={product.img} alt={product.alt} />
                            <ProductsInfo>
                                <ProductsTitle>{product.name}</ProductsTitle>
                                <ProductsDesc>{product.desc}</ProductsDesc>
                                <ProductsPrice>{product.price}</ProductsPrice>
                                <ProductsButton>{product.button}</ProductsButton>
                            </ProductsInfo>
                        </ProductsCard>
                    )
                })}
            </ProductsWraper>
        </ProductsContainer>
    )
}

export default Products