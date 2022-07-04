/**
 * @since 4 July 2022
 * @version 1.0
 * @use
 * 
 * 
 */
import styled from 'styled-components';
import { ButtonProps } from '../buttonProps'

const StyledBaseButton = styled.button<ButtonProps>`
top: 125px;
left: 518px;
background: #5CB85C 0% 0% no-repeat padding-box;
text-align: left;
font: normal normal 600 13px/24px Open Sans;
letter-spacing: 0px;
color: #FFFFFF;
border-radius: 2px;
padding:4px;
opacity: 1;
border: 1px solid #5CB85C;
height: 36px
`;
export default StyledBaseButton;

