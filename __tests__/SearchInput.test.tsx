import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '@/components/SearchInput';

describe('SearchInput', () => {
    it('deve renderizar input e responder à digitação', () => {
        const handleChange = jest.fn();
        render(<SearchInput value="" onChange={handleChange} />);

        const input = screen.getByPlaceholderText('Buscar personagem...');
        fireEvent.change(input, { target: { value: 'Rick' } });

        expect(handleChange).toHaveBeenCalledWith('Rick');
    });
});
