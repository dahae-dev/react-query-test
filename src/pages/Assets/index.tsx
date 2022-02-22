import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

import Card from 'components/Card';

import AssetItem from './components/AssetItem';
import { useAssets } from './queries';

// ====

const Root = styled.div`
  ${px(3)}
  ${py(2)}
`;

const ExternalLink = styled.a<{ isLinked: boolean }>`
  cursor: ${({ isLinked }) => isLinked ? 'pointer' : 'default'};
  color: ${({ theme }) => theme.colors.black};
  &:hover {
  color: ${({ theme, isLinked }) => (
    isLinked
      ? theme.colors.primary
      : theme.colors.black
  )}
  }
`;

const Assets = () => {
  const { data, isLoading } = useAssets();
  const { assets = [] } = data || {};
  return (
    <Root>
      {
        isLoading
          ? 'Loading...'
          : assets
            .filter(asset => asset.name || asset.image_preview_url)
            .map((asset) => (
              <Card key={asset.id}>
                <ExternalLink
                  href={asset.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  isLinked={!!asset.external_link}
                >
                  <AssetItem
                    asset={asset}
                  />
                </ExternalLink>
              </Card>
            ))
      }
    </Root>
  );
};

export default Assets;
