import { render, screen } from '@testing-library/react';
import CharacterCard from '@/components/CharacterCard';

describe('CharacterCard', () => {
    it('deve exibir nome, status e imagem', () => {
        render(
            <CharacterCard
                id={1}
                name="Rick Sanchez"
                status="Alive"
                image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
        );

        expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
        expect(screen.getByText('Alive')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('1.jpeg'));
    });
});
