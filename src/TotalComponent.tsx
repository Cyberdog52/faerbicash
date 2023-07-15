import { Product } from './model';


export type  TotalComponentProps = {
    selectedProducts: Map<Product, number>
    addProduct: (product: Product) => void
    removeProduct: (product: Product) => void
    resetProducts: () => void
}

const TotalComponent = ({ selectedProducts, addProduct, removeProduct, resetProducts }: TotalComponentProps) => {
    return (
        <>
            { Array.from(selectedProducts.entries()).map(([product, amount]) => (
                <div key={product.name}>
                    {product.name} {amount}x
                    <button onClick={() => addProduct(product)}>+</button>
                    <button onClick={() => removeProduct(product)}>-</button>
                </div>
            ))}
            <button onClick={resetProducts}>Reset</button>
        </>
    )
}

export default TotalComponent;
