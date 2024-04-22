import { auth, signIn } from '@/auth';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await auth();
  if (session?.user) redirect('/');

  return (
    <form
      action={async () => {
        'use server';
        await signIn();
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  );
}
