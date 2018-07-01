import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { Container } from './style';
import { setUser } from 'api/redux'

const Auth = ({login, handleSubmit}) => (
  <Container>
    <form onSubmit={handleSubmit((res)=>(login))} >

    </form>
  </Container>
);

export default reduxForm({form: "auth", destroyOnUnmount: true})(connect(null,
  (dispatch, ownProps) => ({
    login: variables => ownProps.mutate({variables}).then( v => {
      sessionStorage.setItem("user", v);
      dispatch(setUser(v));
    }).catch( e => 
      alert("erreur !")
    )
  })
)(Auth));