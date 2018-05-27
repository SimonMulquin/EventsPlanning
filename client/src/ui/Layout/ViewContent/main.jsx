import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from './style';
import viewContents from 'ui/ViewContents';

const ViewContent = ({ activeContent : { component, content } }) => {
  const Content = viewContents[component]
  return (
    <Container>
     <Content {...content} />
    </Container>
  );
};



export default withRouter(connect(
  ( store, ownProps ) => ({
    activeContent: store.viewContents[ownProps.match.params.viewContent]
  })
)(ViewContent));