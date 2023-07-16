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
  column-gap: 1vw;
  overflow: scroll;
  flex-wrap: wrap;
`

const ButtonContainer = styled.div`
  flex: 2 1 auto;
  min-width: 300px;
  min-height: 500px;
  padding: 1rem;
  
  border: none;
  font-weight: bold;
`

const TotalContainer = styled.div`
  flex: 1 1 auto;
  float: right;
  min-width: 300px;
  padding: 8px;
  border: none;
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
