import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas de GifExpertApp', () => {

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('Se muestra la primera categoria default', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('One Punch'));
    });

    test('Debe agregarse una categoría nueva', () => {
        const inputValue = 'Goku';

        render(<GifExpertApp />);

        fireEvent.input(screen.getByRole('textbox'), {target: {value: inputValue}});
        fireEvent.submit(screen.getByRole('form'));

        expect(screen.getByText(inputValue));
    });

    test('No debe agregarse una categoría repetida', () => {
        const inputValue = 'One Punch';

        render(<GifExpertApp />);

        fireEvent.input(screen.getByRole('textbox'), {target: {value: inputValue}});
        fireEvent.submit(screen.getByRole('form'));

        expect(screen.getAllByText(inputValue).length).toBe(1);
    });

    test('Se muestran los gifs default', async() => {
        render(<GifExpertApp />);
        await waitFor(
            () => expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
        );
        
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    });

    test('Se muestra una nueva categoria con sus gifs', async() => {
        const inputValue = 'Goku';

        render(<GifExpertApp />);

        fireEvent.input(screen.getByRole('textbox'), {target: {value: inputValue}});
        fireEvent.submit(screen.getByRole('form'));

        await waitFor(
            () => expect(screen.queryAllByText('Cargando...').length).toBe(0)
        );

        expect(screen.getAllByRole('heading', {level:3}).length).toBe(2);
        expect(screen.queryAllByText('Cargando...').length).toBe(0);

    });

});