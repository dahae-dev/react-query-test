import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface SquareProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// ====

const Root = styled.div`
  position: relative;
  width: 100%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const RootInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 100%;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Square = ({
  className,
  children,
  ...props
}: PropsWithChildren<SquareProps>) => (
  <Root className={className} {...props}>
    <RootInner>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </RootInner>
  </Root>
);

export default Square;
