import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import FilterCharacters from './FilterCharacters';
import SwCharacterList from './SwCharactersList';
import SwCharacterModal from './SwCharacterModal';

function Main() {
  const swCharactersApiUrl = 'https://swapi.dev/api/people'; // a mock RESTful api for star wars characters/people
  // const paginationLimit = 10;

  const [swCharacters, setSwCharacters] = useState([]);

  const onfilterSwCharacters = useCallback((searchStr) => {
    setSwCharacters([...swCharacters.filter((character) => character.name.includes(searchStr))]);
  }, [swCharacters]);

  const [openModal, setOpenSwModal] = useState(false);
  const [swCharacterModalDetails, setSwCharacterModalDetails] = useState({});

  const onOpenCharacterDetailsModal = (character) => {
    console.log('ni sud sa open');
    setSwCharacterModalDetails(character);
    setOpenSwModal(true);
  }

  const onCloseCharacterDetailsModal = () => {
    setOpenSwModal(false);
    setSwCharacterModalDetails(null);
  }

  /* const paginateTo = useCallback((pageNo) => {

  }, [swCharacters.length]);

  const onOpenCharacterDetailsModal = () => {

  }; */

  useEffect(() => {
    if (!swCharacters.length) {
      axios.get(`${swCharactersApiUrl}`)
        .then((response) => {
          setSwCharacters(response.data.results);
        });
    }
  }, [swCharacters.length]);

  if (!swCharacters.length) {
    return <><div>Loading...</div></>
  }

  return (
    <>
      <React.Fragment>
        <SwCharacterModal
            openModal={openModal}
            onCloseModal={onCloseCharacterDetailsModal}
            swCharacterDetails={swCharacterModalDetails}
          />
        <div className='sw-character-list-wrapper'>
          <FilterCharacters filterSwCharacter={onfilterSwCharacters}/>
          <SwCharacterList
            swCharacters={swCharacters}
            onOpenCharacterDetailsModal={onOpenCharacterDetailsModal}
            />
        </div>
      </React.Fragment>
    </>
  )

}

export default Main;