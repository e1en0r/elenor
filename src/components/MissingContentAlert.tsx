import { MainContentAlert, MainContentAlertProps } from 'components/MainContentAlert';
import { NotFoundIcon } from 'icons/NotFoundIcon';

export type MissingContentAlertProps = Omit<MainContentAlertProps, 'icon'>;

export function MissingContentAlert({
  color = 'warning',
  message,
  ...props
}: MissingContentAlertProps): React.ReactElement {
  return <MainContentAlert color={color} icon={NotFoundIcon} message={message} {...props} />;
}

MissingContentAlert.displayName = 'MissingContentAlert';
