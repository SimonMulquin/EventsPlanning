import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addViewContent } from 'api/redux';

class ViewsManager extends Component {
  constructor(props){
    super(props);

  };

  render() {
    const { viewContents, add } = this.props;

    return (
      <div>
        <ul>
          {viewContents.filter(vc => vc.component !== 'ViewsManager').map((view, index) => (
            <li>
              <span>{view.withProps.title}</span>
            </li>
          ))}
        </ul>
        <div>
          <strong>Nouvelle fenêtre</strong>
        </div>
        <div>
          <input type="text" placeholder='Nom' ref={node => this.name = node} />
        </div>
        <button onClick={() => add(this.name.value)} >Ajouter</button>
      </div>
    );
  };
};

export default connect(
  ({viewContents}) => ({
    viewContents
  }),
  dispatch => ({
    add: name => dispatch(addViewContent({ name }))
  })
)(ViewsManager);