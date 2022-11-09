import React, { } from 'react';
import SwCharactersListItem from './SwCharactersListItem';
import PropTypes from 'prop-types';

const SwCharacterList = (props) => {

  return props.swCharacters.map((swCharacter, index) => (
    <SwCharactersListItem
      key={index}
      characterId={index+1}
      character={swCharacter}
      openCharacterDetailsModal={props.onOpenCharacterDetailsModal}
    />
  ));
}

// set prop types for required prop types
SwCharacterList.propTypes = {
  swCharacters: PropTypes.array.isRequired,
  onOpenCharacterDetailsModal: PropTypes.func.isRequired,
};

export default SwCharacterList;