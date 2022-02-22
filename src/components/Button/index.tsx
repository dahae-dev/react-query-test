import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { py, px } from 'styled-components-spacing';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

// ====

const Root = styled.button<ButtonProps>`
  ${py(1)}
  ${px(1.5)}
  border-radius: 4px;
  ${({ outlined, theme }) => outlined && `
    background-color: ${theme.colors.white};
    color: ${theme.colors.textLight};
    border: 2px solid ${theme.colors.gray}
  `}
`;

const Button = ({
  outlined = false,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <Root
    outlined={outlined}
    {...props}
  >
    {children}
  </Root>
);

export default Button;
export type {
  ButtonProps,
};
