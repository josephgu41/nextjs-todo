import { getData } from '@/actions/todoActions';
import { auth } from '@/auth';
import Todos from '@/components/Todos';
import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  if (!session || !session?.user) {
    await signIn();
    return;
  }

  const data = await getData();
  return (
    <>
      <Todos todos={data} session={session!}/>
    </>
  );
}
