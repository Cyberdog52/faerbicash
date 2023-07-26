import {AgeRestriction, allProducts, Product} from './model';
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
  font-family: inherit;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    font-size: 1.0rem;
  }
  margin-left: 4px;
  margin-top: 4px;
  cursor: pointer;
  font-weight: bold;
  color: ${props => props.textColor};
  text-align: center;
`

const Total = styled.span<ButtonProps>`
  position: absolute;
  top: -4px;
  right: -4px;
  padding: 4px;
  font-size: 1rem;
  width: 1.25rem;
  height: 1.25rem;

  @media (min-width: 1000px) {
    font-size: 1.25rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  background-color: ${props => props.backgroundColor};
  border: none;
  color: white;
`

const Age = styled.span<ButtonProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 4px;
  font-size: 0.75rem;
  width: 1.5rem;
  height: 0.75rem;

  @media (min-width: 1000px) {
    font-size: 1.0rem;
    width: 2.0rem;
    height: 1.0rem;
  }
  background-color: ${props => props.backgroundColor};
  border: none;
  color: white;
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
                        onClick={() => addProduct(product)}>{product.name}
                        {isSelected(product) && <Total
                            backgroundColor={product.getSecondaryColor()}
                            textColor={product.getPrimaryColor()}>
                            {getTotalAmount(product)}
                        </Total>}
                        {product.ageRestriction === AgeRestriction.SIXTEEN_PLUS &&
                        <Age
                            backgroundColor='#aaaa00'
                            textColor={product.getPrimaryColor()}>16+</Age>
                        }
                        {product.ageRestriction === AgeRestriction.EIGHTEEN_PLUS &&
                            <Age
                                backgroundColor='#bf0000'
                                textColor={product.getPrimaryColor()}>18+</Age>
                        }
                    </Button>
                </>
            ))}
        </ButtonGrid>
    )
}

export default ButtonComponent;
