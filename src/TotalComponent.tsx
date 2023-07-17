import { Deposit, getDepositPrice, Product } from './model';
import styled from 'styled-components';
import { useState } from 'react';


export type  TotalComponentProps = {
    selectedProducts: Map<Product, number>
    addProduct: (product: Product) => void
    removeProduct: (product: Product) => void
    resetProducts: () => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  height: 100%;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
`

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface PriceProps {
    bold?: boolean
}

const Price = styled.div<PriceProps>`
  min-width: 7vw;
  float: left;
  text-align: right;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  
  width: 100%;
  margin-bottom: 8px;
`

const BigButton = styled.button`
  border: none;
  padding: 2vw;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;
`

const ResetButton = styled(BigButton)`
  background-color: rgb(1, 163, 228);
  color: white;
`;

const DepositBackContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
  margin-top: auto;
  align-self: flex-end;
  color: #fd5dac;
`

const Text = styled.span`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`


const SmallRoundButton = styled.button`
  font-size: 1.25rem;
  border: none;
  font-weight: bold;
  background-color: transparent;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(229, 229, 255, 0.3) 1px 3px 3px 1px;
  color: white;
`

const TotalContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  border: none;
  font-weight: bold;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const TotalComponent = ({ selectedProducts, addProduct, removeProduct, resetProducts }: TotalComponentProps) => {

    const [depositBack, setDepositBack] = useState<Map<Deposit, number>>(new Map<Deposit, number>());

    function addDepositBack(deposit: Deposit) {
        const newDepositBack = new Map(depositBack);
        newDepositBack.set(deposit, (newDepositBack.get(deposit) ?? 0) + 1);
        setDepositBack(newDepositBack);
    }

    function removeDepositBack(deposit: Deposit) {
        const newDepositBack = new Map(depositBack);
        newDepositBack.set(deposit, Math.max((newDepositBack.get(deposit) ?? 0) - 1, 0));
        setDepositBack(newDepositBack);
    }

    function getDepositBackAmount(deposit: Deposit): number {
        return depositBack.get(deposit) ?? 0;
    }

    function getTotalDepositBack(deposit: Deposit): number {
        return getDepositBackAmount(deposit) * getDepositPrice(deposit);
    }

    function handleResetClicked() {
        setDepositBack(new Map<Deposit, number>());
        resetProducts();
    }

    function getAmountOfDeposit(deposit: Deposit): number {
        return Array.from(selectedProducts.entries())
            .filter(([product, amount]) => product.depot === deposit)
            .reduce((sum, [product, amount]) => sum + amount, 0);
    }

    function getTotalPriceForDeposit(deposit: Deposit): number {
        return getAmountOfDeposit(deposit) * getDepositPrice(deposit);
    }

    function getTotalPrice(): number {
        const pricesExcludingDeposit = Array.from(selectedProducts.entries())
            .reduce((sum, [product, amount]) => sum + product.price * amount, 0);
        const depositPrice = Array.from(selectedProducts.entries()).reduce((sum, [product, amount]) => sum + product.getDepositCost() * amount, 0);
        const depositBackPrice = Array.from(depositBack.entries()).reduce((sum, [deposit, amount]) => sum - getDepositPrice(deposit) * amount, 0);
        return pricesExcludingDeposit + depositPrice + depositBackPrice;
    }
    return (
        <Container>
            <ProductList>
                { Array.from(selectedProducts.entries()).map(([product, amount]) => (
                    <Entry key={product.name}>
                        <div>
                            <SmallRoundButton onClick={() => removeProduct(product)}>-</SmallRoundButton>
                            <Text>{amount}x</Text>
                            <SmallRoundButton onClick={() => addProduct(product)}>+</SmallRoundButton>
                            <Text>{product.name}</Text>
                        </div>
                        <div>
                            <Price>{product.price}.-</Price>
                            <Price bold={true}>{product.price * amount}.-</Price>
                        </div>
                    </Entry>
                ))}
                {[Deposit.CUP, Deposit.MUG, Deposit.GLASS].map(deposit => (
                    <>
                    {getAmountOfDeposit(deposit) > 0 && <Entry>
                            <div style={{paddingLeft: "2.5rem"}}>{getAmountOfDeposit(deposit)}x Depot {deposit}</div>
                            <div><Price>{getDepositPrice(deposit)}.-</Price>
                                <Price bold={true}>{getTotalPriceForDeposit(deposit)}.-</Price></div>
                        </Entry>}
                    </>
                    ))
                }
            </ProductList>
            <DepositBackContainer>
                {[Deposit.CUP, Deposit.MUG, Deposit.GLASS].map(deposit => (
                    <Entry key={deposit}>
                        <div>
                            <SmallRoundButton onClick={() => removeDepositBack(deposit)}>-</SmallRoundButton>
                            <Text>{getDepositBackAmount(deposit)}x </Text>
                            <SmallRoundButton onClick={() => addDepositBack(deposit)}>+</SmallRoundButton>
                            <Text>{deposit} zurück</Text>
                        </div>
                        <div>
                            <Price>{getDepositPrice(deposit)}.-</Price>
                            <Price bold={true}>{getTotalDepositBack(deposit)}.-</Price>
                        </div>
                        </Entry>
                ))}
            </DepositBackContainer>
            <TotalContainer>
                <div>Total</div>
                <div>{getTotalPrice()}.-</div>
            </TotalContainer>
            <ButtonGroup>
                <ResetButton onClick={handleResetClicked}>Neue Bestellung</ResetButton>
            </ButtonGroup>
        </Container>
    )
}

export default TotalComponent;
