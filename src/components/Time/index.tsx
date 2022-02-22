import { format as formatDatetime } from 'date-fns';
import styled from 'styled-components';

interface TimeProps {
  value: string | number;
  format?: string;
}

// ====

const Root = styled.span``;

const Time = ({
  value,
  format = 'MMM dd, yyyy',
}: TimeProps) => {
  const datetime = formatDatetime(new Date(value), format);
  return (
    <Root>
      {datetime}
    </Root>
  );
};

export default Time;
export type {
  TimeProps,
};
