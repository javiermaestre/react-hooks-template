import { IconList } from '../icon';

export enum ButtonVariant {
  'Default' = 'default',
  'Primary' = 'primary',
  'Subtle' = 'subtle',
  'Link' = 'link',
  'Success' = 'success',
  'Warning' = 'warning',
  'Danger' = 'danger'
}

export enum ButtonSize {
  'Large' = 'lg',
  'Small' = 'sm'
}

export interface ButtonProps {
  children?: any;
  classNames?: string;
  icon?: IconList;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  square?: boolean;
  variant?: ButtonVariant;
}
