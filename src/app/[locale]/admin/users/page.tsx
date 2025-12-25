import { getUsers } from '@/actions/getUsers';
import UsersClient from './UsersClient';

export const metadata = {
    title: 'Users Management - Admin Dashboard',
};

export default async function UsersPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
    const search = typeof params.search === 'string' ? params.search : '';
    const role = typeof params.role === 'string' ? params.role : undefined;

    const { users, total, totalPages } = await getUsers({
        page,
        limit: 10,
        search,
        role,
    });

    return (
        <UsersClient
            initialUsers={users}
            total={total}
            totalPages={totalPages}
            currentPage={page}
        />
    );
}
