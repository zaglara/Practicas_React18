import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        console.log(hero);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 10;
        const hero = getHeroeById(id);

        //expect(hero).toEqual(undefined);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar arreglo con heroes de DC', () => {
        const owner = 'DC';
        const heroesTest = getHeroesByOwner(owner);

        console.log(heroesTest);

        expect(heroesTest).toEqual(heroesTest.filter( (heroe) => heroe.owner === owner ));
        expect(heroesTest).toEqual(heroes.filter((heroe) => heroe.owner === owner));
        expect(heroesTest.length).toBe(3);
    });

    test('getHeroesByOwner debe retornar arreglo con heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesTest = getHeroesByOwner(owner);

        console.log(heroesTest);

        expect(heroesTest).toEqual(heroesTest.filter( (heroe) => heroe.owner === owner ));
        expect(heroesTest).toEqual(heroes.filter((heroe) => heroe.owner === owner));
        expect(heroesTest.length).toBe(2);
    });

});
