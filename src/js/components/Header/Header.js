import React from 'react';
import Title from './Title';

export default class Header extends React.Component{
    render() {
        console.error(this.props);
        return(
          <div>
              <Title title={this.props.name}/>
              <input />
          </div>
        );
    }
}