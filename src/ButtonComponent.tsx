import { allProducts, Product } from './model';
import styled from 'styled-components';


export type ButtonComponentProps = {
    addProduct: (product: Product) => void
    selectedProducts: Map<Product, number>
}

export type ButtonProps = {
    backgroundColor: string;
    textColor: string;
}

const ButtonGrid = styled.div`
  display: grid;
  @media (orientation: portrait) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (orientation: landscape) {
    grid-template-columns: repeat(4, 1fr);
  }
  grid-gap: 4px;
  margin: 4px;
  height: 100%
`

const Button = styled.button<ButtonProps>`
  position: relative;
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 1rem;
  margin-right: 4px;
  margin-bottom: 4px;
  cursor: pointer;
  margin-outside: 1px;
  font-weight: bold;
  color: ${props => props.textColor};
  text-align: center;
`

const Total = styled.span<ButtonProps>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
  font-size: 1rem;
  width: 1rem;
  height: 1rem;
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 50%;
  color: ${props => props.textColor};
`

const ButtonComponent = ({ addProduct, selectedProducts }: ButtonComponentProps) => {
    const getTotalAmount = (product: Product) => {
        return selectedProducts.get(product) || 0;
    }

    const isSelected = (product: Product) => {
        return getTotalAmount(product) > 0;
    }

    return (
        <ButtonGrid>
            {allProducts.map(product => (
                <>
                    <Button
                        backgroundColor={product.backgroundColor}
                        textColor={product.textColor}
                        key={product.name}
                        onClick={() => addProduct(product)}>{product.name}
                        {isSelected(product) && <Total
                            backgroundColor={product.textColor}
                            textColor={product.backgroundColor}>
                            {getTotalAmount(product)}
                        </Total>}
                    </Button>
                </>
            ))}
        </ButtonGrid>
    )
}

export default ButtonComponent;
