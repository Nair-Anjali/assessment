
import { TextField } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

function FormComponent() {
  const [btnDisable, setBtnDisable] = useState(true)
  const [state, setState] = React.useState({
    Name: "",
    Description: "",
    Web_Reference: ""
  })

  let test: any = {};
  const [validation, setValidation] = useState(false)
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      test[key] = value
    }
    setState({
      ...state,
      ...test
    });
  };
  useEffect(() => { submitData(state) }, [state])

  const submitData = async (state: any) => {
    if (Object.values(state).includes('')) {
      return
    } else {
      setValidation(false)
      const res = await fetch('http://localhost:5000/budgets', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(state),
      })
      const data = await res.json()
      console.log("data", data)
    }

  }

  const eventHandler = () => {
    if (Object.values(state).includes('')) {
      setValidation(true)
    } else {
      setBtnDisable(false)
      setValidation(false)
    }
  }


  return (
    <>
      {validation ? <Alert variant="danger">
        All three feilds are required
      </Alert> : null}

      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="formStyling">
          <Container>
            <Row className={"mt-1"}>
              <Col sm={4}>
                <div className="labelStyle">Name</div>
              </Col>
              <Col sm={8}>
                <TextField
                  type="text" required
                  name="Name"
                  default-value={state.Name}
                  onBlur={eventHandler}
                  variant="standard"
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className={"mt-1"} >
              <Col sm={4}>
                <span className="labelStyle">Description</span>
              </Col>
              <Col sm={8}>
                <TextField
                  type="text" required
                  name="Description"
                  default-value={state.Description}
                  variant="standard"
                  onBlur={eventHandler}
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className={"mt-1"}>
              <Col sm={4}>
                <span className="labelStyle">Web Ref.</span>
              </Col>
              <Col sm={8}>
                <TextField
                  type="text" required
                  name="Web_Reference"
                  default-value={state.Web_Reference}
                  variant="standard"
                  onBlur={eventHandler}
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className={"mt - 6"}>
              <Col sm={4}>
              </Col>
              <Col sm={6}>
                <button className="float-end mt-5 btnStyle" type="submit">Add</button>
              </Col>
            </Row>
          </Container>
        </div>


      </form>

    </>
  );
};
export default FormComponent