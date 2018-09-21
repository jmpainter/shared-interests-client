import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { setCoordinates } from '../actions/misc';
import store from '../store';
import './LocationSelect.css';

export default class LocationSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  handleChange = address => {
    console.log(address);
    this.setState({ address });
    this.props.input.onChange(address);
  };
 
  handleSelect = address => {
    console.log(address);
    console.log(this.props);
    this.setState({ address });
    this.props.input.onChange(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('latLng: ' + JSON.stringify(latLng));
        store.dispatch(setCoordinates(latLng))
       })
      .catch(error => console.error('Error', error));
  };
 
  render() {

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <div className="form-warning">{this.props.meta.warning}</div>;
    }

    return (
      <div className="form-location-select">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          // onChange={this.props.input.onChange}
          onSelect={this.handleSelect}
          ref={input => (this.input = input)}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}