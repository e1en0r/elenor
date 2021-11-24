import styled from '@emotion/styled';
import {
  Paper,
  PaperProps,
  Rhythm,
  StateColor,
  SvgIconProps,
  Theme,
  Typography,
  useGetWidth,
  useThemeId,
} from '@phork/phorkit';
import { themes } from 'config/themes';

const getColorKey = (color: MainContentAlertProps['color']): PaperProps['color'] => {
  if (color === 'primary') return 'accent';
  if (color === 'warning') return 'warning';
  if (color === 'danger') return 'danger';
  return 'secondary';
};

const AlertContainer = styled(Paper, {
  shouldForwardProp: (prop: string) => !['raised', 'size'].includes(prop),
})<{ raised?: boolean; size: number; themeId?: Theme }>`
  ${({ raised, size, themeId = 'light' }) => `
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  height: ${size}px;
  justify-content: center;
  width: ${size}px;
  ${raised ? `box-shadow: ${themes[themeId]['box-shadow-40']};` : ''}
`}
`;

export type MainContentAlertProps = Omit<PaperProps, 'children' | 'color'> & {
  color?: Omit<StateColor, 'success'>;
  icon: React.FC<SvgIconProps>;
  message: string;
  raised?: boolean;
  size?: number;
};

const MINIMIM_SIZE = 200;
const DEFAULT_SIZE = 300;

export const MainContentAlert = ({
  color,
  icon: Icon,
  message,
  raised,
  size: initSize = DEFAULT_SIZE,
  ...props
}: MainContentAlertProps): React.ReactElement => {
  const themeId = useThemeId();
  const width = useGetWidth();
  const size = width ? Math.max(MINIMIM_SIZE, Math.min(width - 40, initSize)) : initSize;
  const iconSize = Math.round(size / 3);

  return (
    <AlertContainer color={getColorKey(color)} raised={raised} size={size} themeId={themeId} {...props}>
      <Rhythm mb={6}>
        <Icon size={iconSize} style={{ flex: 'none' }} />
      </Rhythm>
      <Typography align="center" size="xlarge">
        {message}
      </Typography>
    </AlertContainer>
  );
};

MainContentAlert.displayName = 'MainContentAlert';
