import React, { useEffect, useState } from "react";
import { Col, Container, Row, } from "react-bootstrap";
import DataGridDemo from "../Grid/Grid";
import FormComponent from "../Form/Form";

function ModalContent() {

  return (
    <>

      <Container>
        <Row>
          <Col sm={6}>
            <DataGridDemo />
          </Col>
          <Col sm={6}>
            <FormComponent />
          </Col>

        </Row>

      </Container>

    </>
  );
}

export default ModalContent