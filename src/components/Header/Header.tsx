import { useAuth } from '@/features/auth/providers/AuthProvider';
import { Button } from '../Button';
import { useLogoutUser } from '@/features/auth/api/logoutUser';

export function Header() {
  const { user } = useAuth();

  const logoutUserMutation = useLogoutUser();

  return (
    <div className="py-4 px-6 navbar justify-between">
      <h1 className="text-xl">Super App</h1>
      <div className="flex items-center text-md">
        <span>Hello, {user?.name}</span>
        <Button
          className="text-error btn-ghost"
          onClick={() => logoutUserMutation.mutate()}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}
