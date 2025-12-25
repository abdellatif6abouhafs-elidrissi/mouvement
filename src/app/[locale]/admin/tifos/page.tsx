import { getTifos } from '@/actions/getTifos';
import TifosClient from './TifosClient';

export default async function TifosPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
    const search = typeof params.search === 'string' ? params.search : '';

    const { tifos, totalPages } = await getTifos({ page, search });

    return <TifosClient initialTifos={tifos} totalPages={totalPages} currentPage={page} />;
}
