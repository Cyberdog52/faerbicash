import React, { useState } from 'react';
import styled from 'styled-components';
import { Product } from './model';
import ButtonComponent from './ButtonComponent';
import TotalComponent from './TotalComponent';
import BackgroundImage from "./assets/background.png";

const AppComponent = styled.div`
  background-color: #000000;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media (orientation: portrait) {
    flex-wrap: wrap;
  }
  @media (orientation: landscape) {
    height: 100vh;
  }
`

export interface BackgroundProps {
    backgroundImage: string;
}

const ButtonContainer = styled.div<BackgroundProps>`
  flex: 2 1 auto;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (orientation: landscape) {
    height: 100%;
    max-width: 50vw;
  }
  @media (orientation: portrait) {
    min-height: 500px;
  }

  border: none;
  font-weight: bold;
`

const TotalContainer = styled.div`
  flex: 1 1 auto;
  float: right;
  min-width: 300px;
  padding: 0.5rem;
  
  border: none;
  
  overflow-y: scroll;
  
  @media (min-width: 768px) {
    padding: 1rem;
  }
  
  @media (orientation: landscape) {
    height: 100%;
    max-width: 50vw;
  }
`

function App() {

    const [selectedProducts, setSelectedProducts] = useState<Map<Product, number>>(new Map());

    const addProduct = (product: Product) => {
        const newSelectedProducts = new Map(selectedProducts);
        const currentAmount = newSelectedProducts.get(product) || 0;
        newSelectedProducts.set(product, currentAmount + 1);
        setSelectedProducts(newSelectedProducts);
    }

    const removeProduct = (product: Product) => {
        const newSelectedProducts = new Map(selectedProducts);
        const currentAmount = newSelectedProducts.get(product) || 0;
        const newAmount = currentAmount - 1;
        if (newAmount > 0) {
            newSelectedProducts.set(product, newAmount);
            setSelectedProducts(newSelectedProducts);
        } else {
            newSelectedProducts.delete(product);
            setSelectedProducts(newSelectedProducts);
        }
    }

    const resetProducts = () => {
        setSelectedProducts(new Map());
    }

    return (
    <AppComponent>
        <ButtonContainer backgroundImage={BackgroundImage}>
            <ButtonComponent
                addProduct={addProduct}
                selectedProducts={selectedProducts}
            />
        </ButtonContainer>
        <TotalContainer>
            <TotalComponent
                addProduct={addProduct}
                removeProduct={removeProduct}
                resetProducts={resetProducts}
                selectedProducts={selectedProducts}
            />
        </TotalContainer>
    </AppComponent>
    );
}

export default App;
