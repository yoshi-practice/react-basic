import React from 'react';

export default class Footer extends React.Component{
    render() {
      const nowDate = new Date().getFullYear();
        return(
          <div>
            <p>
              <small lang="en">© {nowDate} - yoshi .</small>
            </p>
          </div>  
        );
    }
}