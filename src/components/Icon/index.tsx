import React from 'react';
import styled from 'styled-components';

interface IconProps {
  name: string;
}

const defaultProps: Partial<IconProps> = {};

// ====

const Root = styled.div``;

const Icon = () => (
  <Root />
);

Icon.defaultProps = defaultProps;

export default Icon;
export type {
  IconProps,
};
