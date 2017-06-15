import React, { Component } from 'react';

import Titre from '../../components/Titre';

class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <Titre value="Bonjour Monde" />
      </div>
    );
  }
}

export default Home;
