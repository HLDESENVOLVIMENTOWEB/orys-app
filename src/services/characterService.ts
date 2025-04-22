import {api} from "@/services/api";

export interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
}

export interface FetchCharactersResponse {
    characters: Character[];
    hasNextPage: boolean;
}

export async function fetchCharacters(
    page: number,
    onSuccess?: (data: FetchCharactersResponse) => void
): Promise<FetchCharactersResponse> {
    const res = await api.get(`/character?page=${page}`);
    const data = {
        characters: res.data.results,
        hasNextPage: Boolean(res.data.info.next),
    };
    if (onSuccess) onSuccess(data);
    return data;
}
