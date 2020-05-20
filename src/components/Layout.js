import React from 'react';

function Layout(props) {

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="container-fluid content">
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
