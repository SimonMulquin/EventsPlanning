import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from './style';
import viewContents from 'ui/ViewContents';

const ViewContent = ({ activeContent : { component, state, title } }) => {
  const Content = viewContents[component];
  const withProps = {...state, viewTitle: title};
  return (
    <Container>
     <Content {...withProps} />
    </Container>
  );
};

export default withRouter(connect(
  ( store, ownProps ) => ({
    activeContent: store.views[ownProps.match.params.view] ? store.views[ownProps.match.params.view] : {
      component: 'ViewsManager',
      title: 'Organiser',
      state: {

      }
    }
  })
)(ViewContent));