import { pokeDataProps } from "@/app/page";
import Image from "next/image";
import { PokemonBar } from "./PokemonBar";

interface SiderBar {
  pokeDataArray: pokeDataProps[];
}

export function SideBar({ pokeDataArray }: SiderBar) {
  let pokeballSize = 70;
  
  return (
    <nav className="mr-12 mt-1 ">
      <div className=" flex flex-row items-center gap-2 justify-center">
        <h1 className="font-mono text-white text-2xl ">PokeNext</h1>
        <Image
          src="/pokeball.png"
          width={pokeballSize}
          height={pokeballSize}
          alt="Pokeball icon"
        />
      </div>
      <div className="scrollbarhidden h-[30rem] w-[20rem] bg-zinc-900 p-4 rounded-md overflow-hidden hover:overflow-y-auto">
        {pokeDataArray.map((pokeData) => {
          return <PokemonBar key={pokeData.name} pokeData={pokeData} />;
        })}
      </div>
      <footer className="text-center text-white font-mono text-[0.5rem] mt-1.5">
        Coded by: <span className="text-red-500">@Nihilboy</span>
      </footer>
    </nav>
  );
}
