import React from 'react';
import styled from 'styled-components';

const AppComponent = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
  font-size: calc(10px + 2vmin);
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppComponent>
      <div>Färbi</div>
    </AppComponent>
  );
}

export default App;
