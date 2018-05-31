import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import Routes from 'tools/utils/Structures/Routes';

import { Page, Header, LeftTool, RightTool, View, ViewNavigation, ViewContent } from 'ui/Layout/Components.jsx';

const Layout = ({ viewContents }) => {
  return (
    <Page>
      <Header />
      <LeftTool />
      <View>
        <Routes routes={{
          "/:viewContent": () => (
            <ViewNavigation options={viewContents.map(({ title }, index) => ({
              label: title,
              to: `/${index}`
            }))} />
          )
        }} withDefault />
        <Route path="/:viewContent" component={ ViewContent }  />
      </View>
      <RightTool />
    </Page>
  );
};

export default withRouter(connect(({viewContents}) => ({
  viewContents
}))(Layout));