import React, { Component } from 'react';
import { messages } from '../../constants/messages';

export class StorageContainer extends Component {
  state = { storage: null };
  componentDidMount() {
    fetch('/sql/storage/storage/list')
      .then(res => res.json())
      .then(res => this.setState({ storage: res.recordset }));
  }
  render() {
    const { storage } = this.state;
    const { confirmText } = messages;
    return (
      <div>
        <h2>Storage</h2>
        <table>
          <tbody>
            <tr>
              <th>storage_id</th>
              <th>author_id</th>
              <th>author_first_name</th>
              <th>author_surname</th>
            </tr>
            {storage &&
              storage.map(i => {
                return (
                  <tr key={i.storage_id}>
                    <td>{i.storage_id}</td>
                    <td>{i.author_id}</td>
                    <td />
                    <td />
                  </tr>
                );
              })}
          </tbody>
        </table>
        <p>
          Remove: <input type="number" placeholder="#storage_id" />
        </p>
        <button>{confirmText}</button>
      </div>
    );
  }
}
