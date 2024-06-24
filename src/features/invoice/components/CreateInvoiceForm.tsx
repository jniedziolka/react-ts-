import { Form } from '@/components/Form';
import { CreateInvoiceDTO, useCreateInvoice } from '../api/createInvoice';
import { InputField } from '@/components/Form/InputField';
import { SelectField, SelectOption } from '@/components/Form/SelectField';
import { useMediumTypes } from '../api/getMediumTypes';
import { LoadingRing } from '@/components/Loading';
import { MediumType } from '../types';
import { Button } from '@/components/Button';

const parseMediumTypes = (mediumTypes: MediumType[]): SelectOption[] => {
  return mediumTypes.map((mediumType) => ({
    value: mediumType.id,
    label: mediumType.name,
  }));
};

export function CreateInvoiceForm() {
  const mediumTypes = useMediumTypes();
  const createInvoiceMutation = useCreateInvoice();

  if (mediumTypes.isLoading) {
    return <LoadingRing />;
  }

  if (!mediumTypes.data) {
    return 'Error loading the data.';
  }

  const parsedMediumTypes = parseMediumTypes(mediumTypes.data);

  return (
    <Form<CreateInvoiceDTO>
      onSubmit={(invoiceData) => {
        createInvoiceMutation.mutate(invoiceData, {
          onSuccess: () => (window.location.href = '/invoices'),
        });
      }}
    >
      {({ register, formState }) => (
        <>
          <InputField
            type="text"
            placeholder="Number"
            name="number"
            register={register}
            required
            error={formState.errors['number']}
          />
          <SelectField
            name="medium_type_id"
            options={parsedMediumTypes}
            register={register}
            error={formState.errors['medium_type_id']}
          ></SelectField>
          <InputField
            type="number"
            placeholder="Cost"
            name="cost"
            register={register}
            required
            step="0.01"
            error={formState.errors['cost']}
          />
          <Button type="submit">Create</Button>
        </>
      )}
    </Form>
  );
}
