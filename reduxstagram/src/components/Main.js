// @flow
import React from 'react';
import { Link } from 'react-router';

type Props = {| |}

class Main extends React.Component {
  static propTypes = {};

  props: Props;

  render = () => {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    )
  };
}

export default Main;
