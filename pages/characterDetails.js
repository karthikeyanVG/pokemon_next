import React, { useState } from "react";
import Card from "../components/Card";
import { useRouter } from "next/router";
import Search from "../components/Search";

function CharacterPage({ pokemon }) {
  const [search, setSearch] = useState("");
  const Router = useRouter();

  const DetailsClick = (poke) => {
    // console.log("poke: ", poke);
  };
  const onClickPoke = () => {
    Router.push("/");
  };

  const onSearch = () => {
    console.log(search);
  };
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <center>
        <div className="flex justify-center relative">
          <div></div>
          <h1
            className=" text-5xl text-yellow-400 font-extrabold "
            onClick={() => onClickPoke()}
          >
            Pokemon
          </h1>
          <Search
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder={"Search"}
            onClick={onSearch}
            Title="Search"
          />
        </div>
        <div className=" flex flex-wrap justify-evenly m-5">
          {pokemon
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((e, index) => (
              <>
                <Card
                  href={`/pokemonDetails/?name=${e.name}`}
                  key={index}
                  image={e.image}
                  name={e.name}
                  onClick={(e) => DetailsClick(e)}
                />
              </>
            ))}
        </div>
      </center>
    </div>
  );
}
export default CharacterPage;

//fetch Api
export async function getStaticProps() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=162");
    const { results } = await res.json();
    const pokemon = results.map((pokeman, index) => {
      const paddedId = ("00" + (index + 1)).slice(-3);
      //   console.log("paddedId: ", paddedId);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...pokeman, image };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
