"use client"
import Image from "next/image";

interface PokemonBarProps {
  pokeData: {
    name: string;
    id: string | null;
  };
}

export function PokemonBar({ pokeData }: PokemonBarProps) {
  let pokemonIconSize = 55;

  function capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function showPokeID(){
    console.log(pokeData.id)
  }

  return (
    <button onClick={showPokeID} className="mt-2 h-16 w-full bg-zinc-800 flex items-center justify-start gap-3 rounded-md border border-transparent cursor-pointer opacity-90 hover:opacity-100 hover:border hover:border-white">
      <div className="flex justify-center items-center bg-zinc-700 rounded-r-xl rounded-l-sm w-20 h-14 ml-1">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`}
          alt="pokemon icon"
          width={pokemonIconSize}
          height={pokemonIconSize}
        />
      </div>
      <h2 className="text-zinc-50">{capitalizeString(pokeData.name)}</h2>
      <span className="text-white font-bold">#{pokeData.id}</span>
    </button>
  );
}
