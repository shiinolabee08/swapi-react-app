import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../App';

const FilterCharacters = (props) => {

  const theme = useContext(ThemeContext);

  const [searchStr, setSearchStr] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    props.filterSwCharacter(searchStr);
  }

  const onInputChange = (e) => {
    setSearchStr(e.target.value);
    props.filterSwCharacter(searchStr);
  }

  const getLabelStyle = () => {
    return Object.assign({ display: 'block', padding: '10px 0px' }, theme.details.styles);
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label
          style={getLabelStyle()}>
            Filter by name
          </label>
        <input
          style={{ padding: '10px 10px' }}
          name="sw-character-name"
          value={searchStr}
          placeholder="e.g Chewy"
          onInput={onInputChange}/>
      </form>
    </>
  );
}

FilterCharacters.propTypes = {
  filterSwCharacter: PropTypes.func.isRequired
}

export default FilterCharacters;