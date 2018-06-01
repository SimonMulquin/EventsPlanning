import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteView } from 'api/redux';

import { Container, Option, SLink } from './style';

const ViewNavigation = ({options, match: { params }, del }) => {
  return (
    <Container>
      <Option>
        <SLink active={!params.view} to='/' >
          +
        </SLink>
      </Option>
      {options.map((option, index) => (
        <Option key={index}>
          <SLink active={parseInt(params.view, 10) === index} to={option.to}>
            {option.label}
            <button onClick={e =>{ e.preventDefault(); del(index)}} >x</button>
          </SLink>
        </Option>
      ))}
    </Container>
  );
};

export default withRouter(connect(null, d => ({
  del: (viewIndex) => d(deleteView({viewIndex}))
}))(ViewNavigation));