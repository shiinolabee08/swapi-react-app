import React from 'react';
import PropTypes from 'prop-types';

const SwCharactersListItem = (props) => {

  const getItemContainerStyle = {
    backgroundColor: '#5C472F',
    padding: '10px',
    border: '1px solid #666666',
    position: 'relative',
    marginTop: '10px',
  };

  const { name } = props.character;

  return (
    <>
      <div style={getItemContainerStyle}>
        <label
          onClick={props.openCharacterDetailsModal.bind(this, props.character)}>
          { name }
        </label>
      </div>
    </>
  );
}

// set prop types for required prop types
SwCharactersListItem.propTypes = {
  character: PropTypes.object.isRequired,
  openCharacterDetailsModal: PropTypes.func.isRequired,
  closeCharacterDetailsModal: PropTypes.func.isRequired,
};

export default SwCharactersListItem;