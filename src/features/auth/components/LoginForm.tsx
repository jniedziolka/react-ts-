import { Form } from '@/components/Form';
import { LoginUserDTO, useLoginUser } from '../api/loginUser';
import { InputField } from '@/components/Form/InputField';
import { ButtonLoading } from '@/components/Button/ButtonLoading';

export function LoginForm() {
  const loginUserMutation = useLoginUser();

  return (
    <div className="w-1/4">
      <Form<LoginUserDTO>
        onSubmit={(data) => {
          loginUserMutation.mutate(data);
        }}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              placeholder="Email"
              name="email"
              register={register}
              required
              error={formState.errors['email']}
            />
            <InputField
              type="password"
              placeholder="Password"
              name="password"
              register={register}
              required
              error={formState.errors['password']}
            />
            <ButtonLoading
              type="submit"
              isLoading={loginUserMutation.isPending}
            >
              Log In
            </ButtonLoading>
          </>
        )}
      </Form>
    </div>
  );
}
