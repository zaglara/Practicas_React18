import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroeCard } from "./";

export const HeroeList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
        {
            heroes.map(heroe => 
                <HeroeCard 
                    key={heroe.id}
                    {...heroe} //AQUI MANDO LAS PROPIEDADES DESESTRUCTURADAS
                />
            )
        }
    </div>
  )
}
