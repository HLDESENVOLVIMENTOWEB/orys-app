interface LoadMoreButtonProps {
    onClick: () => void;
    loading: boolean;
    disabled: boolean;
}

export default function LoadMoreButton({ onClick, loading, disabled }: LoadMoreButtonProps) {
    return (
        <button
            onClick={onClick}
            className="mt-8 px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition disabled:opacity-50"
            disabled={disabled}
        >
            {loading ? 'Carregando...' : 'Ver mais'}
        </button>
    );
}
