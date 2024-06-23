import React from 'react';
import clsx from 'clsx';
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

const generateValidationPattern = (type?: React.HTMLInputTypeAttribute) => {
  if (type === 'email') {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  }

  return /.*/;
};

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  label?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function InputField<T extends FieldValues>({
  name,
  register,
  label,
  error,
  ...props
}: InputProps<T>) {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <input
        className={clsx(
          'input input-bordered w-full',
          error ? 'input-error' : ''
        )}
        {...props}
        {...register(name, {
          required: 'Field is required.',
          pattern: {
            value: generateValidationPattern(props.type),
            message: `Invalid ${props.type}`,
          },
        })}
      />
      {error && (
        <div className="label">
          <span className="label-text-alt text-red-500">{error.message}</span>
        </div>
      )}
    </label>
  );
}
