import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Option, SLink } from './style';

const ViewNavigation = ({options, match: { params } }) => {
  return (
    <Container>
      {options.map((option, index) => (
        <Option key={index}>
          <SLink active={parseInt(params.viewContent, 10) === index} to={option.to}>
            {option.label}
          </SLink>
        </Option>
      ))}
    </Container>
  );
};

export default withRouter(ViewNavigation);