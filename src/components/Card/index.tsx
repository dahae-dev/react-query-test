import { HTMLAttributes, PropsWithChildren } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { mt, Padding } from 'styled-components-spacing';


interface CardProps extends HTMLAttributes<HTMLDivElement> {
  borderColor?: keyof DefaultTheme['colors'];
  backgroundColor?: keyof DefaultTheme['colors'];
  sectioned?: boolean;
  vertical?: boolean;
}

// ====

const Body = styled.div`
  flex: 1;
  -ms-flex: 1 0 auto;
`;

const Tail = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Section = styled(Padding).attrs(({ all }) => ({ all: (all !== undefined) ? all : 3 }))`
  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

const Root = styled.div<CardProps>`
  display: ${({ vertical }) => (vertical ? 'flex' : 'block')};
  ${({ vertical }) => (vertical ? 'flex-direction: column' : '')};
  border: 1px solid ${({ theme, borderColor }) => (
    borderColor
    || theme.colors.gray
  )};
  border-radius: 3px;
  background-color: ${({ theme, backgroundColor }) => (
    backgroundColor
    || theme.colors.white
  )};

  & + & {
    ${mt(2)}
  }

  & > ${Section}:first-child {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
  & > ${Section}:last-child {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
`;

const Card = ({
  sectioned = false,
  vertical = false,
  children,
  ...props
}: PropsWithChildren<CardProps>) => (
  <Root
    vertical={vertical}
    {...props}
  >
    {
      sectioned
        ? (
          <Section>
            {children}
          </Section>
        )
        : children
    }
  </Root>
);

Card.Body = Body;
Card.Tail = Tail;
Card.Section = Section;

export {
  Body,
  Tail,
  Section,
};

export default Card;
export type { CardProps };
