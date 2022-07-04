import React, { useState } from "react";
import { Button, Modal, Row, Tab, Tabs } from "react-bootstrap";
import "./styles/style.css";
import '../Modal/styles/style.css';
import ModalContent from "./ModalContent";
import StyledModalHeader from "./styles/modalHeaderStyle";
import StyledModalContainer from "./styles/modalStyle";

function Example(props: any) {
  const [show, setShow] = useState(true);

  return (
    <>
      <StyledModalContainer>
        <Modal
          size={'xl'}
          show={show}
          onHide={props.handleClose}
        >
          <StyledModalHeader>
            <Modal.Header closeButton >
              <Modal.Title>Alets</Modal.Title>
            </Modal.Header>
          </StyledModalHeader>
          <Modal.Body>

            <Tabs defaultActiveKey="Immunization Alerts" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="Immunization Alerts" title="Immunization Alerts">
                <section className="titleClass">Immunization Alerts</section>
                <ModalContent />
              </Tab>
              <Tab eventKey="Lab Alerts" title="Lab Alerts">
                Lab Alerts
              </Tab>
              <Tab eventKey="DI Alerts" title="DI Alerts">
                DI Alerts
              </Tab>
              <Tab eventKey="Procedure Alerts" title="Procedure Alerts">
                Procedure Alerts
              </Tab>
              <Tab eventKey="RX Specific Alerts" title="RX Specific Alerts">
                RX Specific Alerts
              </Tab>
              <Tab eventKey="DX Specific Alerts" title="DX Specific Alerts">
                DX Specific Alerts
              </Tab>
              <Tab eventKey="Patient Specific Alerts" title="Patient Specific Alerts">
                Patient Specific Alerts
              </Tab>
            </Tabs>

          </Modal.Body>
          <Modal.Footer>
            <Button className="closeBtn" onClick={props.handleClose} title="Cancel">
              Cancel
            </Button>
            <Button className="okBtn" variant="primary" title="Ok">ok</Button>
          </Modal.Footer>
        </Modal>
      </StyledModalContainer>
    </>
  );
}

export default Example