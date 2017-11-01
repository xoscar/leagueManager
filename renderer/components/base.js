// dependencies
import { Component } from 'react';

// models
import riot from '../lib/integrations/riot';

export default class Base extends Component {
  integrations = {
    riot,
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  handleEvent(func, event) {
    event.preventDefault();

    return func()

      .catch(err => (
        this.setState({
          err,
        })
      ));
  }
}
