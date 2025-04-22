import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCharacters, FetchCharactersResponse } from '@/services/characterService';

export function useCharacters() {
    return useInfiniteQuery<
        FetchCharactersResponse,
        Error,
        FetchCharactersResponse,
        [string],
        number
    >({
        queryKey: ['characters'],
        queryFn: ({ pageParam = 1 }) => fetchCharacters(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) =>
            lastPage.hasNextPage ? allPages.length + 1 : undefined,
    });
}
