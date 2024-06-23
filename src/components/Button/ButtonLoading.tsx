import { Button, ButtonProps } from './Button';

type ButtonLoadingProps = {
  isLoading: boolean;
} & ButtonProps;

export function ButtonLoading({
  isLoading,
  children,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button {...props}>
      <div className="flex items-center">
        {isLoading && <span className="loading loading-spinner"></span>}
        <span className="text-sm">{children}</span>
      </div>
    </Button>
  );
}
