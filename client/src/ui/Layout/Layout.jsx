import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from 'tools/utils/Structures/Routes';

import { Page, Header, LeftTool, RightTool, View, ViewNavigation, ViewContent } from 'ui/Layout/Components.jsx';

const Layout = ({ views }) => {
  return (
    <Page>
      <Header />
      <LeftTool />
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
      <RightTool />
    </Page>
  );
};

export default withRouter(connect(({views}) => ({
  views
}))(Layout));