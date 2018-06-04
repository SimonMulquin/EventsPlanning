import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteView } from 'api/redux';

import { Container, Option, SLink, Delete , Add} from './style';

class ViewNavigation extends Component {
  constructor(props) {
    super(props);

    this.preventScroll = true;
  };

  render() {
    const { options, match: { params }, del } = this.props;

    const scroll = (initialSpeed, delay = 1) => {
      const prevScroll = this.container.scrollLeft;
      this.container.scrollLeft = prevScroll+ initialSpeed;
      console.log(prevScroll, initialSpeed);
      return this.preventScroll ? false :
        setTimeout(
          ()  => scroll(
            initialSpeed * Math.ceil(delay/10),
            delay + 1
          ),
          80
        );
    };

    return (
      <Container innerRef={node => this.container = node} >
        <Option>
          <Add active={!params.view} add to='/' >
            +
        </Add>
        </Option>
        {options.map((option, index) => (
          <Option key={index}>
            <SLink active={parseInt(params.view, 10) === index} to={option.to}>
              {option.label}
            </SLink>
            <Delete onClick={e => { e.preventDefault(); del(index) }} >x</Delete>
          </Option>
        ))}
        <div onMouseOver={() => {this.preventScroll = false; scroll(-1);}} onMouseLeave={() => this.preventScroll = true} >--</div>
        <div onMouseOver={() => { this.preventScroll = false; scroll(1);}} onMouseLeave={() => this.preventScroll = true} >++</div>
      </Container>
    );
  };
};

export default withRouter(connect(null, d => ({
  del: (viewIndex) => d(deleteView({viewIndex}))
}))(ViewNavigation));