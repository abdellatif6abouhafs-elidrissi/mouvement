import { getChants } from '@/actions/getChants';
import ChantsClient from './ChantsClient';

export default async function ChantsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
    const search = typeof params.search === 'string' ? params.search : '';

    const { chants, totalPages } = await getChants({ page, search });

    return <ChantsClient initialChants={chants} totalPages={totalPages} currentPage={page} />;
}
