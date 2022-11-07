import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import FilterCharacters from './FilterCharacters';
import SwCharacterList from './SwCharactersList';

function Main() {
  const swCharactersApiUrl = 'https://swapi.dev/api/people'; // a mock RESTful api for star wars characters/people
  const paginationLimit = 10;

  const [swCharacters, setSwCharacters] = useState([]);

  const onfilterSwCharacters = useCallback((searchStr) => {
    setSwCharacters([...swCharacters.filter((character) => character.includes(searchStr))]);
  }, [swCharacters]);

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
        <FilterCharacters filterSwCharacter={onfilterSwCharacters}/>
        <SwCharacterList swCharacters={swCharacters}/>
      </React.Fragment>
    </>
  )

}

export default Main;