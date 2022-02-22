import styled from 'styled-components';
import { Margin, py, px } from 'styled-components-spacing';

import Img from 'components/Img';
import Square from 'components/Square';
import Text from 'components/Text';
import TextLineClamp from 'components/TextLineClamp';
import Time from 'components/Time';

import { IAsset } from '../../types';

interface AssetItemProps {
  asset: IAsset
}

const defaultProps: Partial<AssetItemProps> = {};

// ====

const Root = styled.div`
  ${py(1)}
  display: flex;
`;

const Thumbnail = styled.div`
  width: 30%;
  ${px(1)}
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${px(1)}
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  background: none;
`;

const AssetItem = ({
  asset,
}: AssetItemProps) => (
  <Root>
    <Thumbnail>
      <Square>
        <StyledImg
          src={asset.image_preview_url}
          width="100%"
        />
        </Square>
    </Thumbnail>
    <Info>
      <Text
        color="primary"
        size="s"
      >
        {`${asset.creator.user?.username || 'Unknown'}`}
      </Text>
      <Margin top={0.5}>
        <TextLineClamp>
          <Text
            color="black"
            weight="semiBold"
            size="l"
          >
            {asset.name || 'No Title'}
          </Text>
        </TextLineClamp>
      </Margin>
      <Margin top={0.5}>
        <TextLineClamp lineClamp={2}>
          <Text
            color="textDark"
            size="xs"
          >
            {asset.description || 'No Description'}
          </Text>
        </TextLineClamp>
      </Margin>
      <Margin top={1}>
        <Text
          color="textLight"
          size="xs"
        >
          {'Owned by '}
          <Text
            color="primary"
          >
            {`${asset.owner.user?.username}`}
          </Text>
        </Text>
      </Margin>
      {
        asset.last_sale
          ? (
            <Margin top={1}>
              <Text size="s">
                {'Last sold at '}
                <Time
                  value={asset.last_sale}
                  />
              </Text>
            </Margin>
          )
          : null
      }
    </Info>
  </Root>
);

AssetItem.defaultProps = defaultProps;

export default AssetItem;
export type {
  AssetItemProps,
};
