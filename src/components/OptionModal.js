import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal isOpen={!!props.selectedOption} contentLabel="selected option">
    <h3>selected option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleModalClose}>Okey</button>
  </Modal>
);

export default OptionModal;