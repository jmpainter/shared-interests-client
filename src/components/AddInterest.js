import React from 'react';
import { connect } from 'react-redux';
import {
  setAutoCompleteData, 
  setInputValue,
  setNewInterest} from '../actions/misc';

// Import the Autocomplete Component
import Autocomplete from 'react-autocomplete';
import './AddInterest.css';

export class AddInterest extends React.Component {

  constructor(props, context) {
    super(props, context);

    // Bind `this` context to functions of the class
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
  }

  /**
   * Updates the state of the autocomplete data with the remote data obtained via AJAX.
   */ 

  retrieveDataAsynchronously(searchText){
    console.log('retrieveDataAsynchronously ' + searchText);
    if(searchText.length >= 3) {
      const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=${searchText}`
  
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          this.props.dispatch(setAutoCompleteData(myJson.query.search));
        })
        .catch(err => console.error(err));
    }
  }

  /**
   * Callback triggered when the user types in the autocomplete field
   */
  onChange(e){
    this.props.dispatch(setInputValue(e.target.value));
    this.retrieveDataAsynchronously(e.target.value);
  }
  
  /**
   * Callback triggered when the autocomplete input changes.
   */
  onSelect(val){
    this.props.dispatch(setNewInterest(val));
    console.log("Option from 'database' selected : ", val);
  }

  /**
   * Define the markup of every rendered item of the autocomplete.
   */
  renderItem(item, isHighlighted){
    return (
      <div key={item.pageid} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
        {item.title}
      </div>   
    ); 
  }

  /**
   * Define which property of the autocomplete source will be show to the user.
   */
  getItemValue(item){
    // You can obviously only return the Label or the component you need to show
    // In this case we are going to show the value and the label that shows in the input
    // something like "1 - Microsoft"
    return item.title;
  }

  render() {
    return (
      <div>
        <Autocomplete
          getItemValue={this.getItemValue}
          items={this.props.autoCompleteData}
          renderItem={this.renderItem}
          value={this.props.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

AddInterest.defaultProps = {
  autoCompleteData: [],
  value: ''
};

const mapStateToProps = state => ({
  autoCompleteData: state.misc.autoCompleteData,
  value: state.misc.inputValue
});

export default connect(mapStateToProps)(AddInterest);