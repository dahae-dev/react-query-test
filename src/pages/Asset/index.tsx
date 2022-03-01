import { ExternalLink as ExternalLinkIcon } from 'react-feather';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Padding, Margin } from 'styled-components-spacing';

import Img from 'components/Img';
import Square from 'components/Square';
import Text from 'components/Text';
import TextLineClamp from 'components/TextLineClamp';

import { useAsset } from './queries';
import type { IParams } from './queries';

// ====

const Root = styled.div``;

const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  background: none;
`;

const Partition = styled.div`
  display: flex;
  align-items: center;
`;

const PartitionMain = styled.div`
  flex: 1;
`;

const PartitionSide = styled.div``;

const ExternalLink = styled.a<{ isLinked: boolean }>`
  cursor: ${({ isLinked }) => isLinked ? 'pointer' : 'default'};
  color: ${({ theme }) => theme.colors.primary};
`;

const Asset = () => {
  const params = useParams<keyof IParams>() as IParams;
  const {
    assetContractAddress,
    tokenId,
  } = params;
  const {
    data: asset,
    isLoading,
    isError,
  } = useAsset({
    assetContractAddress,
    tokenId,
  });

  if (isLoading) {
    return <Center>Loading...</Center>;
  }

  if (isError) {
    return <Center>Unexpected Error</Center>;
  }

  return (
    <Root>
      <Square>
        <StyledImg
          src={asset?.image_preview_url}
          width="100%"
        />
        <Padding vertical={2} horizontal={3}>
          <Partition>
            <PartitionMain>
              <Text
                color="primary"
                size="m"
              >
                {`${asset?.creator?.user?.username || 'Unknown'}`}
              </Text>
            </PartitionMain>
            <PartitionSide>
              <ExternalLink
                href={asset?.permalink}
                target="_blank"
                rel="noopener noreferrer"
                isLinked={!!asset?.external_link}
              >
                <ExternalLinkIcon size={20} />
              </ExternalLink>
            </PartitionSide>
          </Partition>
          <Margin top={1}>
            <TextLineClamp>
              <Text
                color="black"
                weight="bold"
                size="xl"
              >
                {asset?.name || 'No Title'}
              </Text>
            </TextLineClamp>
          </Margin>
          <Margin top={1.5}>
            <Text
              color="textLight"
              size="s"
            >
              {'Owned by '}
              <Text
                color="primary"
              >
                {`${asset?.owner.user?.username}`}
              </Text>
            </Text>
          </Margin>
          <Margin top={2}>
            <Text
              color="textDark"
              size="s"
            >
              {asset?.description || 'No Description'}
            </Text>
          </Margin>
        </Padding>
      </Square>
    </Root>
  );
};

export default Asset;
