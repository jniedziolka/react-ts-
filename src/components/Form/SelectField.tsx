import clsx from 'clsx';
import React from 'react';
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export type SelectOption = {
  value: string | number;
  label: string;
};

type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  options: SelectOption[];
  register: UseFormRegister<T>;
  label?: string;
  error?: FieldError;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField<T extends FieldValues>({
  name,
  register,
  options,
  label,
  error,
  ...props
}: SelectFieldProps<T>) {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <select
        className={clsx('select select-bordered', error ? 'select-error' : '')}
        {...register(name, {
          required: 'Field is required.',
        })}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
