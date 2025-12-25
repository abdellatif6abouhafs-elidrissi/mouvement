import { getGroups } from '@/actions/getGroups';
import GroupsClient from './GroupsClient';

export const metadata = {
  title: 'Groups Management - Admin Dashboard',
};

export default async function GroupsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
  const search = typeof params.search === 'string' ? params.search : '';

  const { groups, total, totalPages } = await getGroups({
    page,
    limit: 10,
    search,
  });

  return (
    <GroupsClient
      initialGroups={groups}
      total={total}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
