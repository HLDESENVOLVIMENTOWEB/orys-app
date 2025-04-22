interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <input
            type="text"
            placeholder="Buscar personagem..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}
