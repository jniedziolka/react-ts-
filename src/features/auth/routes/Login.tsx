import { LoginForm } from '../components/LoginForm';

export function Login() {
  return (
    <div className="flex h-full flex-col items-center gap-8 pt-80">
      <span className="text-2xl">Super App &copy;</span>
      <LoginForm />
    </div>
  );
}
