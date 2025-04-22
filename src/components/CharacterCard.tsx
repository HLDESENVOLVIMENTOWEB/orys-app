import Image from 'next/image';

interface CharacterCardProps {
    id: number;
    name: string;
    status: string;
    image: string;
}

export default function CharacterCard({ name, status, image }: CharacterCardProps) {
    return (
        <div className="flex flex-col items-center border rounded-lg p-4 bg-white shadow hover:shadow-md transition">
            <Image src={image} alt={name} width={100} height={100} className="rounded-full mb-2" />
            <p className="text-sm font-semibold text-center">{name}</p>
            <p className="text-xs text-gray-600">{status}</p>
        </div>
    );
}
