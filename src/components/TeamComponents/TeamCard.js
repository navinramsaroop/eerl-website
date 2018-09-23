import React from 'react';
import maxZhang from '../../resources/images/maxZhang.png';
import './TeamCard.css';
import 'tachyons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class TeamCard extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        modal: false
    };

    this.toggle = this.toggle.bind(this);
    }

    toggle() {
    this.setState({
        modal: !this.state.modal
    });
    }

    render() {
    return (
    <div>
      <div className="card grow" onClick={this.toggle}>
        <img src={maxZhang} className="card-img"/>
        <div class="card-content">
		<h2 class="card-title">
			MAX ZHANG
		</h2>
        
        </div>
      
      </div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>MAX ZHANG, PI</ModalHeader>
          <ModalBody className="card-modal-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
        </Modal>
      </div>
    );
  }
}