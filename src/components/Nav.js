import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// import inboxListItems from 'constants/inboxListItems';
// import loremIpsum from 'lorem-ipsum';

export default class Nav extends PureComponent {
  constructor() {
    super();

    this.state = {
      renderNode: null,
      visible: false,
    };
  }

  render() {
    return (
      <div>
        <Link/>
      </div>
    );
  }
}
