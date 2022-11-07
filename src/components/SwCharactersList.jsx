import React, { useState } from 'react';
import SwCharactersListItem from './SwCharactersListItem';
import PropTypes from 'prop-types';

const SwCharacterList = (props) => {

  const [openModal, setOpenSwModal] = useState(false);
  const [swCharacterModalDetail, setSwCharacterModalDetail] = useState(null);

  const onOpenCharacterDetailsModal = (character) => {
    setSwCharacterModalDetail(character);
    setOpenSwModal(true);
  }

  const onCloseCharacterDetailsModal = () => {
    setOpenSwModal(false);
    setSwCharacterModalDetail(null);
  }

  return props.swCharacters.map((swCharacter, index) => (
    <SwCharactersListItem
      key={index}
      characterId={index+1}
      character={swCharacter}
      openCharacterDetailsModal={onOpenCharacterDetailsModal}
      closeCharacterDetailsModal={onCloseCharacterDetailsModal}
    />
  ));
}

// set prop types for required prop types
SwCharacterList.propTypes = {
  swCharacters: PropTypes.array.isRequired,
};

export default SwCharacterList;