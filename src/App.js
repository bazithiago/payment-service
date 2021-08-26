import React from 'react'
import GlobalStyle from './globalStyles';
import styled from 'styled-components'

import Header from './components/Header';
import TasksFeed from './components/TasksFeed'
import Navbar from './components/Navbar/index';

const Container = styled.div`
  width: 100vw;
`



function App() {
  return (
    <>
      <GlobalStyle />
        <Container>
          <Header userName='Thiago Vieira'/>
          <Navbar />
          <TasksFeed userName='Thiago Vieira'/>
        </Container>
    </>
  );
}

export default App;
