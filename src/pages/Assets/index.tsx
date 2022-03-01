import { Fragment, useRef } from 'react';
import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

import Button from 'components/Button';
import Card from 'components/Card';
import useIntersectionObservser from 'hooks/useIntersectionObserver';

import AssetItem from './components/AssetItem';
import { useAssets } from './queries';

// ====

const Root = styled.div`
  ${px(3)}
  ${py(2)}
`;

const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  text-align: center;
  ${py(2)}
`;

const Assets = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useAssets();
  const { pages = [] } = data || {};

  const loadMoreButtonRef = useRef<HTMLButtonElement>(null);
  useIntersectionObservser({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  if (isLoading) {
    return <Center>Loading...</Center>;
  }

  if (isError) {
    return <Center>Unexpected Error</Center>;
  }

  return (
    <Root>
      {
        pages.map((page, i) => (
          <Fragment key={i}>
            {
              page.assets
                .filter(asset => asset.name || asset.image_preview_url)
                .map((asset) => (
                  <Card key={asset.id}>
                    <AssetItem
                      asset={asset}
                    />
                  </Card>
                ))
            }
          </Fragment>
        ))
      }
      <Wrapper>
        <Button
          ref={loadMoreButtonRef}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          outlined
        >
          {
            isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'
          }
         </Button>
       </Wrapper>
      <Wrapper>
        {
          (isFetching && !isFetchingNextPage)
            ? 'Fetching...'
            : null
        }
      </Wrapper>
    </Root>
  );
};

export default Assets;
