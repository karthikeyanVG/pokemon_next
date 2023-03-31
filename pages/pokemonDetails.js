import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function pokemonDetails({ poke }) {
  const Router = useRouter();

  const OnBackClick = () => {
    Router.push("/characterDetails");
  };
  return (
    <div className="pt-12">
      <div className="flex justify-center ">
        <div className="rounded-lg bg-gradient-to-r from-yellow-800 to-yellow-500 shadow-lg  max-w-sm">
          <div className=" cursor-pointer" onClick={() => OnBackClick()}>
            <h5 className="font-extrabold text-gray-300 p-2 ">{`< Back`}</h5>
          </div>
          <div>
            <h5 className="text-white text-base font-semibold flex justify-center">
              Name : &nbsp;
              <span className="capitalize">{poke.species.name}</span>
            </h5>
            <a>
              <Image
                className=" rounded-md"
                src={poke.sprites.other.home.front_default}
                alt=""
                height={350}
                width={350}
              />
            </a>
          </div>
          <div className="p-6 text-white text-base font-semibold ">
            <h5>{`Height : ${poke.height}`}</h5>
            <h5>{`Weight : ${poke.weight}`}</h5>
            <h5>{`Type : ${poke.types[0].type.name}`}</h5>
            <h5>{`Experience : ${poke.base_experience}`}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

//fetch Api
export async function getServerSideProps({ query }) {
    const name = query.name;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const poke = await res.json();
    const id = query.id;
    const paddedId = ("00" + id).slice(-3);
    poke.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { poke },
    };
  }