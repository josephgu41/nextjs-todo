import { getData } from '@/actions/todoActions';
import { auth } from '@/auth';
import Todos from '@/components/Todos';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  const data = await getData();
  return (
    <>
      <Todos todos={data} session={session}/>
    </>
  );
}
