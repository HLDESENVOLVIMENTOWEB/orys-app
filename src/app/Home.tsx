'use client';

import { useMemo, useState } from 'react';
import { useCharacters } from '@/hooks/useCharacters';
import CharacterGrid from '@/components/CharacterGrid';
import SearchInput from '@/components/SearchInput';
import LoadMoreButton from '@/components/LoadMoreButton';
import {Character} from "@/services/characterService";

export default function Home() {
    const [search, setSearch] = useState('');
    const [showMoreSpacing, setShowMoreSpacing] = useState(false);

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        error,
    } = useCharacters();

    const allCharacters: Character[] = useMemo(() => {
        return data?.pages.flatMap((page) => page.characters) || [];
    }, [data]);


    const filteredCharacters = useMemo(() => {
        return allCharacters.filter((char) =>
            char.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [allCharacters, search]);


    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-6 sm:p-10 font-sans bg-gray-50">
            <SearchInput value={search} onChange={setSearch} />

            {isLoading ? (
                <p className="mt-4 text-gray-500">Carregando personagens...</p>
            ) : error ? (
                <p className="mt-4 text-red-500">Erro ao carregar personagens.</p>
            ) : (
                <CharacterGrid characters={filteredCharacters} showMoreSpacing={showMoreSpacing} />
            )}

            {hasNextPage && (
                <LoadMoreButton
                    onClick={() => {
                        fetchNextPage();
                        setShowMoreSpacing(true);
                    }}
                    loading={isFetchingNextPage}
                    disabled={isFetchingNextPage}
                />
            )}
        </div>
    );
}
