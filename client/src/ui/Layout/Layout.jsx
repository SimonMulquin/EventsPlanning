import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from 'tools/utils/Structures/Routes';
import Auth from 'ui/Layout/Auth/main.jsx';

import { Page, Header, LeftTool, RightTool, View, ViewNavigation, ViewContent } from 'ui/Layout/Components.jsx';

const Layout = ({ views, user }) => {
  return (
    <Page>
      <Header />
      {user && <LeftTool />}
      {user ? 
        <View>
          <Routes routes={{
            "/:view": () => (
              <ViewNavigation options={views.map(({ title }, index) => ({
                label: title,
                to: `/${index}`
              }))} />
            )
          }} withDefault />
          <Routes routes={{
            "/:view": () => (
              <ViewContent />
            )
          }}  withDefault />
        </View> 
      :
          <Auth />
      }
      {user && <RightTool />}
    </Page>
  );
};

export default withRouter(connect(({views, user}) => ({
  views,
  user,
}))(Layout));