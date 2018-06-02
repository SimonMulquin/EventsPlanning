import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteView } from 'api/redux';

import { Container, Option, SLink, Delete , Add} from './style';

const ViewNavigation = ({options, match: { params }, del }) => {
  return (
    <Container>
      <Option>
        <Add active={!params.view} add to='/' >
          +
        </Add>
      </Option>
      {options.map((option, index) => (
        <Option key={index}>
          <SLink active={parseInt(params.view, 10) === index} to={option.to}>
            {option.label}
          </SLink>
          <Delete onClick={e => { e.preventDefault(); del(index) }} >x</Delete>
        </Option>
      ))}
    </Container>
  );
};

export default withRouter(connect(null, d => ({
  del: (viewIndex) => d(deleteView({viewIndex}))
}))(ViewNavigation));