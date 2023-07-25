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
  grid-template-columns: repeat(3, 1fr);
  height: calc(100% - 4px);
  margin-right: 4px;
  margin-bottom: 4px;
`

const Button = styled.button<ButtonProps>`
  position: relative;
  background-color: ${props => props.backgroundColor};
  border: 4px black solid;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  font-size: 0.8rem;
  margin-left: 4px;
  margin-top: 4px;
  cursor: pointer;
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

  @media (min-width: 1000px) {
    font-size: 1.25rem;
    width: 1.25rem;
    height: 1.25rem;
  }
  background-color: ${props => props.backgroundColor};
  border: none;
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
                        backgroundColor={product.getPrimaryColor()}
                        textColor={product.getSecondaryColor()}
                        key={product.name}
                        onClick={() => addProduct(product)}>{product.name.toUpperCase()}
                        {isSelected(product) && <Total
                            backgroundColor={product.getSecondaryColor()}
                            textColor={product.getPrimaryColor()}>
                            {getTotalAmount(product)}
                        </Total>}
                    </Button>
                </>
            ))}
        </ButtonGrid>
    )
}

export default ButtonComponent;
