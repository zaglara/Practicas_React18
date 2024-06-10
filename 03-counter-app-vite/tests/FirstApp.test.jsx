import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    /*test('Debe de hacer match con el snapshot', () => {
        const title = "Hola, Soy Goku"
        const {container} = render(<FirstApp title={title} />);
        
        expect(container).toMatchSnapshot();
    });*/

    test('Debe de mostrar el titulo en un h1', () => {
        const title = "Hola, Soy Goku"
        const {container, getByText, getByTestId} = render(<FirstApp title={title} />);
        
        expect(getByText(title)).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain(title); //Lo mismo pero para que no afecten los espacios en blanco

        expect(getByTestId('test-title').innerHTML).toBe(title);

    });

    test('Debe de mostrar el subtitulo', () => {
        const title = "Hola, Soy Goku";
        const subtitle = "Hola, soy un subtitulo de prueba";
        //const {getByText} = render(<FirstApp title={title} subtitle={subtitle} />);
        const {getAllByText} = render(<FirstApp title={title} subtitle={subtitle} />); //Cuando hay dos o mas elementos con el mismo valor
        
        //expect(getByText(subtitle)).toBeTruthy();
        expect(getAllByText(subtitle).length).toBe(2);

        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain(title); //Lo mismo pero para que no afecten los espacios en blanco

        //expect(getByTestId('test-title').innerHTML).toBe(title);

    });

});