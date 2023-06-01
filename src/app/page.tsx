import { PokemonDetails } from "@/components/PokemonDetails";
import { SideBar } from "@/components/Sidebar";
import axios from "axios";

export interface pokeDataProps {
  name: string;
  id: string | null;
}

export default async function Home() {
  function extrairNumerosDaURL(url: string): string | null {
    const regex = /pokemon\/(\d+)/;
    const numerosEncontrados = url.match(regex);

    if (numerosEncontrados && numerosEncontrados.length >= 2) {
      return numerosEncontrados.slice(1).map(Number).join();
    } else {
      return null;
    }
  }

  const maxPokemons = 151;
  const apiURL = "https://pokeapi.co/api/v2/pokemon/";
  const { data } = await axios.get(`${apiURL}?limit=${maxPokemons}`);
  const results = await data.results;
  const pokeDataArray: pokeDataProps[] = [];
  for (let i = 0; i < results.length; i++) {
    const pokeData: pokeDataProps = {
      name: results[i].name,
      id: extrairNumerosDaURL(results[i].url),
    };

    pokeDataArray.push(pokeData);
  }

  // const pokedata = {
  //   id: data.id,
  //   name: data.name,
  //   hp: data.stats[0].base_stat,
  //   height: data.height,
  //   weight: data.weight,
  //   attack: data.stats[1].base_stat,
  //   defense: data.stats[2].base_stat,
  //   speed: data.stats[5].base_stat,
  // };

  return (
    <div className="flex flex-row justify-between">
      <main className="h-[100vh] w-full flex items-center justify-center">
        <div className="relative">
          <PokemonDetails />
        </div>
      </main>
      <SideBar pokeDataArray={pokeDataArray} />
    </div>
  );
}
