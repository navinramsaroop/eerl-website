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
    if (this.props.card){
        return (
        <div>
          <div className="card grow" onClick={this.toggle}>
            <img src={this.props.image} className="card-img"/>
            <div class="card-content">
        <h2 class="card-title">
          {this.props.name}
        </h2>
            
            </div>
          
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
              <ModalBody className="card-modal-body">
                {this.props.bio}
              </ModalBody>
            </Modal>
          </div>
        );
    } else {
      return (
        <div>
        <div className="slip grow" onClick={this.toggle}>
          {this.props.name}
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
              <ModalBody className="card-modal-body">
                {this.props.bio}
              </ModalBody>
            </Modal>
        </div>
      );
    }

  }
}
