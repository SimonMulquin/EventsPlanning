import React from 'react';

import { Container, Repo, Title } from './style';

const Header = () => {
  return (
    <Container>
      <Title>
        <Repo target='blank' href='https://github.com/SimonMulquin/EventsPlanning' >EventsPlanning</Repo>
      </Title>
    </Container>
  );
};

export default Header;