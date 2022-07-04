import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showModal?: boolean;
  id: string;
  /**
   * width of button
   */
  width?: string;
  /**
   * height of button
   */
  height?: string;

  /**
   * Fires when button is clicked
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  title: string;


}