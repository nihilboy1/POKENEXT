import Image from "next/image";

export function BouncingSnorlax() {
  let sleepingSnorlaxImageSize = 500;

  return (
    <>
      <span className="absolute animate-bounce top-20 left-4">
        <Image src="/choose.svg" alt="choose" width={100} height={100} />
      </span>
      <span className="absolute animate-bounce top-[4.4rem] left-[6.5rem]">
        <Image src="/a.svg" alt="a" width={12} height={12} />
      </span>
      <span className="absolute animate-bounce top-8 left-[8.5rem]">
        <Image src="/pokemon.svg" alt="pokemon" width={100} height={100} />
      </span>
      <span className="absolute animate-bounce top-[1.8rem] left-[15.5rem] rotate-[45deg]">
        <Image src="/to.svg" alt="to" width={40} height={40} />
      </span>
      <span className="absolute animate-bounce top-[0.2rem] left-[18rem] -rotate-[20deg]">
        <Image src="/see.svg" alt="see" width={60} height={60} />
      </span>
      <span className="absolute animate-bounce top-[-1rem] left-[24.5rem]">
        <Image src="/details.svg" alt="details" width={90} height={90} />
      </span>
      <Image
        src="/snorlax-sleeping.png"
        alt="sleeping snorlax"
        width={sleepingSnorlaxImageSize}
        height={sleepingSnorlaxImageSize}
      />
    </>
  );
}
