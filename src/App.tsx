import React, { useState } from 'react';
import styled from 'styled-components';
import { Product } from './model';
import ButtonComponent from './ButtonComponent';
import TotalComponent from './TotalComponent';

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

const ButtonContainer = styled.div`
  flex: 2 1 auto;
  min-width: 300px;
  padding-top: 4px;
  padding-left: 4px;
  padding-bottom: 4px;
  
  @media (min-width: 768px) {
    padding: 1rem;
  }
  
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
        if (currentAmount > 0) {
            newSelectedProducts.set(product, currentAmount - 1);
            setSelectedProducts(newSelectedProducts);
        }
    }

    const resetProducts = () => {
        setSelectedProducts(new Map());
    }

    return (
    <AppComponent>
        <ButtonContainer>
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
