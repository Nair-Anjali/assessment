import React, { useState } from "react";
import Example from "../Modal/Modal";
import { ButtonProps } from "./buttonProps";
import StyledBaseButton from "./styles/styleButton";



export const BaseButton: React.FC<ButtonProps> = (
  props: ButtonProps
) => {
  const [show, setShow] = useState(false);
  const modalHandler = (() => {
    setShow(true)
  })
  const handleClose = () => setShow(false);
  return <>
    <StyledBaseButton id="showModal" title={props.title} onClick={modalHandler}>{props.title}</StyledBaseButton>
    {show ? <Example handleClose={handleClose} /> : null}
  </>

};
