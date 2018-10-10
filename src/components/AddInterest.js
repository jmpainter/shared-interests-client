import React from 'react';
import { connect } from 'react-redux';
import { updateInputValue, loadSuggestions, clearSuggestions } from '../actions/misc';
import { addInterest } from '../actions/interests';
import { getUserInfo } from '../actions/users';
import Autosuggest from 'react-autosuggest';

import './AddInterest.css';

export class AddInterest extends React.Component {
  
  render() {
    const { 
      value, 
      suggestions, 
      onChange, 
      onSuggestionSelected,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested
    } = this.props;

    const inputProps = {
      value,
      onChange
    };

    return (
      <div>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
}

function getSuggestionValue(suggestion) {
  return suggestion.title;
}

function renderSuggestion(suggestion) {
  return (
    <a className="autocomplete-suggestion">{suggestion.title}</a>
    );
  }
  function mapDispatchToProps(dispatch) {
    return {
      onChange(event, { newValue }) {
        dispatch(updateInputValue(newValue));
      },
      onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {
        return dispatch(addInterest({
          wikiPageId: suggestion.pageid,
          name: suggestion.title}
        ))
        .then(() => dispatch(getUserInfo())
        .then(() => dispatch(updateInputValue(''))));
      },
      onSuggestionsFetchRequested({ value }) {
        // start generating request to Wikipedia with searches over two characters
        if(value.length > 2 ) {
          dispatch(loadSuggestions(value));
        }
      },
      onSuggestionsClearRequested() {
        dispatch(clearSuggestions());
      }
  };
}

AddInterest.defaultProps = {
  value: '',
  suggestions: [],
  isLoading: false
};

const mapStateToProps = state => ({
  value: state.misc.value,
  suggestions: state.misc.suggestions,
  isLoading: state.misc.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInterest);