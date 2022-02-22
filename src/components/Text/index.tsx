import { PropsWithChildren } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface TextProps {
  color?: keyof DefaultTheme['colors'];
  size?: keyof DefaultTheme['fontSizes'];
  weight?: keyof DefaultTheme['fontWeights'];
}

// ====

const Root = styled.span<TextProps>`
  ${({ theme, color }) => color ? `color: ${theme.colors[color]}` : ''};
  ${({ theme, size }) => size ? `font-size: ${theme.fontSizes[size]}` : ''};
  ${({ theme, weight }) => weight ? `font-weight: ${theme.fontWeights[weight]}` : ''};
`;

const Text = ({
  color,
  size,
  weight,
  children,
}: PropsWithChildren<TextProps>) => (
  <Root
    color={color}
    size={size}
    weight={weight}
  >
    {children}
  </Root>
);

export default Text;
export type {
  TextProps,
};
