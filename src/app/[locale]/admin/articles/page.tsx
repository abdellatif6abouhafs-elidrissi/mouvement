import { getArticles } from '@/actions/getArticles';
import ArticlesClient from './ArticlesClient';

export const metadata = {
    title: 'Articles Management - Admin Dashboard',
};

export default async function ArticlesPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
    const search = typeof params.search === 'string' ? params.search : '';

    const { articles, total, totalPages } = await getArticles({
        page,
        limit: 10,
        search,
    });

    return (
        <ArticlesClient
            initialArticles={articles}
            total={total}
            totalPages={totalPages}
            currentPage={page}
        />
    );
}
