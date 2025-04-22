import CharacterCard from './CharacterCard';

interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
}

interface CharacterGridProps {
    characters: Character[];
    showMoreSpacing: boolean;
}

export default function CharacterGrid({ characters, showMoreSpacing }: CharacterGridProps) {
    return (
        <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-all duration-300 ${
                showMoreSpacing ? 'mt-16' : 'mt-6'
            }`}
        >
            {characters.map((char) => (
                <CharacterCard key={char.id} {...char} />
            ))}
        </div>
    );
}
