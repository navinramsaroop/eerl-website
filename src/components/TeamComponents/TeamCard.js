import React from 'react';
import './TeamCard.css';
import 'tachyons';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

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
    if (this.props.card) {
      return (
        <div>
          <div className="card grow" onClick={this.toggle}>
            <img src={this.props.image} alt="profile" className="card-img" />
            <div className="card-content">
              <h2 className="card-title">{this.props.name}</h2>
            </div>
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
            <ModalBody className="card-modal-body">{this.props.bio}</ModalBody>
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <div className="slip grow" onClick={this.toggle}>
            {this.props.name}
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
            <ModalBody className="card-modal-body">{this.props.bio}</ModalBody>
          </Modal>
        </div>
      );
    }
  }
}
