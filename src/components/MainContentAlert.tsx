import styled from '@emotion/styled';
import {
  Flex,
  Orientation,
  Rhythm,
  StateColor,
  SvgIconProps,
  ThemeColors,
  Typography,
  useGetWidth,
  useSizeListeners,
  useThemeId,
} from '@phork/phorkit';
import { themes } from 'constants/themes';
import { showVerticalPage } from 'utils/sizeUtils';

const Container = styled('div', {
  shouldForwardProp: (prop: string) => !['color', 'height'].includes(prop),
})<{ height?: number; color: string }>`
  align-items: center;
  border-radius: 4px;
  color: ${({ color }) => color};
  display: flex;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  justify-content: center;
  margin: auto;
  max-width: 1500px;
  position: relative;
  width: 100%;
`;

const StyledSvg = styled('svg')`
  position: absolute;
  top: 0;
  left: 0;
`;

const getColorKey = (color: MainContentAlertProps['color']): keyof ThemeColors => {
  if (color === 'primary') return 'primary-palette-text-color';
  if (color === 'neutral') return 'secondary-palette-quieter-color';
  if (color === 'warning') return 'color-warning';
  if (color === 'danger') return 'color-danger';
  return 'secondary-palette-quieter-color';
};

export type MainContentAlertProps = {
  color?: Omit<StateColor, 'success'>;
  height?: number;
  icon?: React.FC<SvgIconProps>;
  iconSize?: number;
  message: string;
  orientation?: Orientation;
};

export const MainContentAlert = ({
  color,
  height = 400,
  icon: Icon,
  iconSize,
  orientation,
  message,
  ...props
}: MainContentAlertProps): React.ReactElement => {
  const themeId = useThemeId();

  const {
    ref,
    value: { width: containerWidth, height: containerHeight },
  } = useSizeListeners({
    propsToMeasure: ['width', 'height'],
  });

  const colorKey = getColorKey(color);

  const width = useGetWidth();
  const autoHeight = showVerticalPage(width);

  return (
    <Container color={themes[themeId][colorKey]} height={autoHeight ? undefined : height} ref={ref} {...props}>
      {containerWidth && containerHeight && (
        <StyledSvg viewBox={`0 0 ${containerWidth} ${containerHeight}`}>
          <rect
            fill="none"
            height={containerHeight - 4}
            rx={4}
            ry={4}
            stroke="currentColor"
            strokeDasharray="12 12"
            strokeDashoffset={12}
            strokeLinecap="round"
            strokeWidth="4"
            width={containerWidth - 4}
            x={2}
            y={2}
          />
        </StyledSvg>
      )}

      <Rhythm px={10} py={12}>
        <Flex
          full
          alignItems="center"
          direction={orientation === 'horizontal' ? 'row' : 'column'}
          justifyContent="center"
        >
          {Icon && (
            <Rhythm mb={orientation === 'horizontal' ? 0 : 8} mr={orientation === 'horizontal' ? 4 : 0}>
              <Icon size={iconSize || (orientation === 'horizontal' ? 40 : 100)} style={{ flex: 'none' }} />
            </Rhythm>
          )}
          <Typography align="center" size="2xlarge">
            {message}
          </Typography>
        </Flex>
      </Rhythm>
    </Container>
  );
};

MainContentAlert.displayName = 'MainContentAlert';
