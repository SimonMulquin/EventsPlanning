import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from 'tools/utils/Structures/Routes';

import { Page, Header } from 'ui/Layout/Components.jsx';

const Landing = ({ views }) => {
  return (
    <Page>
      <Header />
     <h1>
       This app is the best, click the convert button now !
     </h1>
     <button>I'm the only seeable button on the page.</button>
    </Page>
  );
};

export default withRouter(connect(({ views }) => ({
  views
}))(Landing));