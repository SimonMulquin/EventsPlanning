import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteView } from 'api/redux';

import { Container, Nav, OverNav, Option, SLink, Delete , Add} from './style';

class ViewNavigation extends Component {
  constructor(props) {
    super(props);

    this.preventScroll = true;
  };

  componentDidMount() {
    this.nav.scrollLeft = this.activeLink.offsetLeft - 50; 
    this.forceUpdate();
  };

  render() {
    const { options, match: { params }, del } = this.props;

    const scroll = (initialSpeed, delay = 1) => {
      const prevScroll = this.nav.scrollLeft;
      this.nav.scrollLeft = prevScroll+ initialSpeed;
      const newSpeed = initialSpeed * Math.ceil(delay / 10);
      return this.preventScroll ? false :
        setTimeout(
          ()  => scroll(
              newSpeed > 120 ? 
              120 : 
              newSpeed < -120 ? 
              -120 : 
              newSpeed
            ,
            delay + 1
          ),
          60
        );
    };

    return (
      <Container>
        <Nav innerRef={node => this.nav = node} >
          <Option {...!params.view ? { innerRef: node => this.activeLink = node} : {}} >
            <Add active={!params.view} add to='/' >
                +
            </Add>
          </Option>
          {options.map((option, index) => (
            <Option {...parseInt(params.view, 10) === index ? {innerRef: node => this.activeLink = node} : {}} key={index}>
              <SLink active={parseInt(params.view, 10) === index} to={option.to}>
                {option.label}
              </SLink>
              <Delete onClick={e => { e.preventDefault(); del(index) }} >x</Delete>
            </Option>
          ))}
        </Nav>
        <OverNav left onMouseOver={() => { this.preventScroll = false; scroll(-6); }} onMouseLeave={() => this.preventScroll = true} />
        <OverNav onMouseOver={() => { this.preventScroll = false; scroll(6); }} onMouseLeave={() => this.preventScroll = true} />
      </Container >
    );
  };
};

export default withRouter(connect(null, d => ({
  del: (viewIndex) => d(deleteView({viewIndex}))
}))(ViewNavigation));