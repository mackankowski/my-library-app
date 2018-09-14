import React, { Component } from 'react';
import { messages } from '../../constants/messages';

export class StorageContainer extends Component {
  state = { storage: null, storage_id: null };
  componentDidMount() {
    fetch('/sql/storage/storage/list')
      .then(res => res.json())
      .then(res => this.setState({ storage: res.recordset }));
  }
  render() {
    const { storage, storage_id } = this.state;
    const { confirmText } = messages;
    return (
      <div>
        <h2>Storage</h2>
        {storage_id && <p>storage_id: {storage_id}</p>}
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
        <p style={{ color: 'green' }}>
          Remove:{' '}
          <input
            onChange={e => this.setState({ storage_id: e.target.value })}
            type="number"
            placeholder="#storage_id"
          />
          <button>{confirmText}</button>
        </p>
      </div>
    );
  }
}
