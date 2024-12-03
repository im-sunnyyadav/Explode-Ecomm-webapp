import { ProductDetail } from "../components/ProductDetail"
import { ProdImage } from "../components/prodImage"
import { RelatedProduct } from "../components/RelatedProducts";

import { useParams } from "react-router-dom"
import useGetProduct from "../utils/hooks/useGetProduct";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

export const ProductPage = () => {
    const param = useParams();
    const id = param.id
    const prod = useGetProduct(id)

    const online = useOnlineStatus()

    if( !online ) return <div> you are offline </div>

    if(prod) return <>
        <section className="flex flex-col gap-10 mx-auto w-[90vw] max-w-[1050px] my-12">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-10  my-[50px]">
                <ProdImage prod={prod}></ProdImage>
                <ProductDetail prod={prod}></ProductDetail>
                
            </div>
            <RelatedProduct category={prod.category}></RelatedProduct>
        </section>

    </>
}