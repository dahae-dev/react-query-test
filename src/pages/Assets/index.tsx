import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

import { useAssets } from './queries';

// ====

const Root = styled.div`
  ${px(3)}
  ${py(2)}
`;

const Assets = () => {
  const { data, isLoading } = useAssets();
  const { assets = [] } = data || {};
  console.log(assets);
  return (
    <Root>
      {
        isLoading
          ? 'Loading...'
          : assets.map((asset) => (
            <div>{`${asset.name}`}</div>
          ))
      }
    </Root>
  );
};

export default Assets;
