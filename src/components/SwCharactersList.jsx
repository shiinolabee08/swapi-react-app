import React from 'react';
import SwCharactersListItem from './SwCharactersListItem';
import PropTypes from 'prop-types';

const SwCharacterList = (props) => {

  const onOpenCharacterDetailsModal = (characterId) => {

  }

  return props.swCharacters.map((swCharacter) => (
    <SwCharactersListItem
      key={swCharacter.name}
      swCharacter={swCharacter}
      openCharacterDetailsModal={onOpenCharacterDetailsModal}
    />
  ));
}

// set prop types for required prop types
SwCharacterList.propTypes = {
  swCharacters: PropTypes.array.isRequired,
};

export default SwCharacterList;