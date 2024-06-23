import React from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  children: (methods: UseFormReturn<T>) => React.ReactNode;
};

export function Form<T extends FieldValues>({
  onSubmit,
  children,
}: FormProps<T>) {
  const form = useForm<T>();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      {children(form)}
    </form>
  );
}
