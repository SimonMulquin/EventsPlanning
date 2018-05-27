import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from './style';
import viewContents from 'ui/ViewContents';

const ViewContent = ({ activeContent : { component, withProps } }) => {
  const Content = viewContents[component];
  return (
    <Container>
     <Content {...withProps} />
    </Container>
  );
};

export default withRouter(connect(
  ( store, ownProps ) => ({
    activeContent: ownProps.content ? ownProps.content : store.viewContents[ownProps.match.params.viewContent]
  })
)(ViewContent));