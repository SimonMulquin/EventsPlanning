import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
            <ViewNavigation options={viewContents.map(({ withProps }, index) => ({
              label: withProps.title,
              to: `/${index}`
            }))} />
          )
        }} withDefault />
        <Routes routes={{
          "/:viewContent": () => (
            <ViewContent />
          )
        }}  />
      </View>
      <RightTool />
    </Page>
  );
};

export default withRouter(connect(({viewContents}) => ({
  viewContents
}))(Layout));