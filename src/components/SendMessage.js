import React from 'react';
import './SendMessage.css';
import { connect } from 'react-redux';
import { setEditorState } from '../actions/misc';
import { addMessage } from '../actions/messages';
import { getConversations } from '../actions/conversations';
import RichTextEditor from 'react-rte';

export class SendMessage extends React.Component {
  submit(event) {
    event.preventDefault();
    const message = this.props.editorState.toString('html');
    this.props.dispatch(addMessage(this.props.conversationId, message))
      .then(() => this.props.dispatch(getConversations()));
  }

  onChange = (value) => {
    this.props.dispatch(setEditorState(value));
  };

  render() {
    return (
      <div className="send-message">
        <form onSubmit={event => this.submit(event)}>
          <label htmlFor="message">Send a message:</label>
          <RichTextEditor
            className="editor"
            value={this.props.editorState}
            onChange={this.onChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

// SendMessage.defaultProps = {
//   editorState: RichTextEditor.createEmptyValue()
// }

const mapStateToProps = state => ({
  editorState: state.misc.editorState
});

export default connect(mapStateToProps)(SendMessage);

// export class SendMessage extends React.Component {

//   constructor(props, context) {
//     super(props, context);

//     // Bind `this` context to functions of the class
//     this.onChange = this.onChange.bind(this);
//   }

//   submit(event) {
//     event.preventDefault();
//   }

//   onChange = (value) => {
//     this.props.dispatch(setEditorValue({value}));
//     this.setState({value});
//   };

//   render() {
//     return (
//       <div className="send-message">
//         <form onSubmit={event => this.submit}>
//           <label htmlFor="message">Send a message:</label>
//           <RichTextEditor
//             className="editor"
//             value={this.props.value}
//             onChange={this.onChange}
//           />
//           <Link to="/profile"><button type="submit">Send</button></Link>
//         </form>
//       </div>
//     );
//   }
// }

// SendMessage.defaultProps = {
//   editorValue: RichTextEditor.createEmptyValue()
// }

// const mapStateToProps = state => ({
//   editorValue: state.misc.editorValue
// });

// export default connect(mapStateToProps)(SendMessage);