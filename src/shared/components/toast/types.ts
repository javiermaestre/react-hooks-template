export enum ToastVariant {
  'Primary' = 'primary',
  'Success' = 'success',
  'Warning' = 'warning',
  'Danger' = 'danger'
}

export interface ToastProps {
  classNames?: string;
  children: React.ReactNode | React.ReactNode[];
  handleClose?: () => void;
  variant?: ToastVariant;
  title: string;
  time?: string;
  content: string;
}
