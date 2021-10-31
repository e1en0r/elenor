import styled from '@emotion/styled';
import { Paper, PaperProps, Rhythm, StateColor, SvgIconProps, Typography, useGetWidth } from '@phork/phorkit';

const getColorKey = (color: MainContentAlertProps['color']): PaperProps['color'] => {
  if (color === 'primary') return 'accent-primary';
  if (color === 'warning') return 'warning';
  if (color === 'danger') return 'danger';
  return 'secondary';
};

const AlertContainer = styled(Paper)<{ size: number }>`
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  height: ${({ size }) => `${size}px;`}
  justify-content: center;
  width: ${({ size }) => `${size}px;`}
`;

export type MainContentAlertProps = Omit<PaperProps, 'children' | 'color'> & {
  color?: Omit<StateColor, 'success'>;
  icon: React.FC<SvgIconProps>;
  message: string;
  size?: number;
};

const MINIMIM_SIZE = 200;
const DEFAULT_SIZE = 300;

export const MainContentAlert = ({
  color,
  icon: Icon,
  message,
  size: initSize = DEFAULT_SIZE,
  ...props
}: MainContentAlertProps): React.ReactElement => {
  const width = useGetWidth();
  const size = width ? Math.max(MINIMIM_SIZE, Math.min(width - 40, initSize)) : initSize;
  const iconSize = Math.round(size / 3);

  return (
    <AlertContainer color={getColorKey(color)} size={size} {...props}>
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
