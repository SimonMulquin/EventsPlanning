import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addView } from 'api/redux';

class ViewsManager extends Component {
  constructor(props){
    super(props);

  };

  render() {
    const { views, add } = this.props;

    return (
      <div>
        <ul>
          {views.filter(vc => vc.component !== 'ViewsManager').map((view, index) => (
            <li>
              <span>{view.title}</span>
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
  ({views}) => ({
    views
  }),
  dispatch => ({
    add: name => dispatch(addView({ name }))
  })
)(ViewsManager);