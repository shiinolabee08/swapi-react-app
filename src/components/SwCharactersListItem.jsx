import React from 'react';
import PropTypes from 'prop-types';

const SwCharactersListItem = (props) => {

  const getItemContainerStyle = {
    backgroundColor: '#5C472F',
    padding: '10px',
    border: '1px solid #666666',
    position: 'relative',
    marginTop: '10px',
    cursor: 'pointer'
  };

  const getLabelStyle = () => {
    return { cursor: 'pointer', color: '#fff', fontWeight: 'bold' };
  }

  const { name } = props.character;

  return (
    <>
      <div style={getItemContainerStyle}>
        <label
          style={getLabelStyle()}
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
};

export default SwCharactersListItem;