import React from 'react';
import PropTypes from 'prop-types';

const SwCharacterModal = (props) => {

  const onCloseModal = () => {
    props.onCloseModal();
  };

  const getClassName = () => {
    return (props.openModal ? 'show' : '' );
  }

  return (
    <>
      <div className={`modal ${getClassName()}`}>
        <div className='modal-content'>
          <div className='modal-header'>{props.swCharacterDetails.name}</div>
          <div className='modal-body'>

          </div>
          <div className='modal-footer'>
            <button onClick={onCloseModal}>Close</button>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop ${getClassName()}`}></div>
    </>
  );
}

// set prop types for required prop types
SwCharacterModal.propTypes = {
  swCharacterDetails: PropTypes.object.isRequired,
  openModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default SwCharacterModal;