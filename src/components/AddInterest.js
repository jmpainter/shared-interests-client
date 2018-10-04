import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { setAutoCompleteData, setInputValue} from '../actions/misc';
import { addInterestAndUpdateUser } from '../actions/interests';
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

  addInterest(interest) {
    // get wikipidiaId from state
    const item = this.props.autoCompleteData.find(item => item.title === interest);
    this.props.dispatch(addInterestAndUpdateUser({
      wikiPageId: item.pageid,
      name: item.title}
    ));
  }

  // Updates the state of the autocomplete data with the remote data obtained via AJAX.

  retrieveDataAsynchronously(searchText){
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

  // Callback triggered when the user types in the autocomplete field

  onChange(e){
    if(this.props.isTest) {
      this.addInterest(e.target.value);
    } else {
      this.props.dispatch(setInputValue(e.target.value));
      this.retrieveDataAsynchronously(e.target.value);
    }
  }
  
  // Callback triggered when the autocomplete input changes.

  onSelect(val){
    this.addInterest(val);
    this.props.dispatch(setInputValue(''));    
    this.props.dispatch(setAutoCompleteData([]));
  }

  // Markup of every rendered item of the autocomplete.

  renderItem(item, isHighlighted){
    let className = 'suggestion';
    className = isHighlighted ? className + ' highlighted' : className;
    return (
      <div className={className} key={item.pageid}>
        {item.title}
      </div>   
    ); 
  }

  // Which property of the autocomplete source will be shown to the user.

  getItemValue(item){
    return item.title;
  }

  render() {
    return (
      <div className="interests-autocomplete">
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