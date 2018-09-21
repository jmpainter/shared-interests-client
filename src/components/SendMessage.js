import React from 'react';
import './SendMessage.css';
import { Link } from 'react-router-dom';
import RichTextEditor from 'react-rte';

export default class SendMessage extends React.Component {
  submit(event) {
    event.preventDefault();
  }

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render() {
    return (
      <div className="send-message">
        <form onSubmit={event => this.submit}>
          <label htmlFor="message">Send a message:</label>
          <RichTextEditor
            className="editor"
            value={this.state.value}
            onChange={this.onChange}
          />
          <Link to="/profile"><button type="submit">Send</button></Link>
        </form>
      </div>
    );
  }
}