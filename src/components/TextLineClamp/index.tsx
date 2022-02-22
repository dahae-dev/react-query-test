import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface TextLineClampProps {
  lineClamp?: number;
}

// ====

// Browser Compatibility
// Full Support: Chrome 6, Edge 17, FirFox 68, Opera 15, Safari 5
// No Support: IE

const Root = styled.div<TextLineClampProps>`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp};
  -webkit-box-orient: vertical;
`;

const TextLineClamp = ({
  lineClamp = 1,
  children,
  ...props
}: PropsWithChildren<TextLineClampProps>) => (
  <Root
  lineClamp={lineClamp}
    {...props}
  >
    {children}
  </Root>
);

export default TextLineClamp;
