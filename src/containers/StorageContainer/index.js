import React, { Component } from 'react';
import { messages } from '../../constants/messages';

export class StorageContainer extends Component {
  render() {
    const { confirmText } = messages;
    return (
      <div>
        <h2>Storage</h2>
        <p>(empty list)</p>
        Remove: <input type="number" placeholder="#storage_id" />
        <button>{confirmText}</button>
      </div>
    );
  }
}
