import { getData } from "@/actions/todoActions";
import Todos from "@/components/Todos";

export const runtime = 'edge';

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
