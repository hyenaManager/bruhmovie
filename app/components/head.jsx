import React from "react";

export default function Head({ images }) {
  return (
    <div className=" flex flex-col justify-start rounded p-8">
      <div className=" flex justify-start rounded p-8 homeComponent">
        <img
          src={"/aot.jpg"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />
        <img
          src={"/bb.png"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />
        <img
          src={"/luffy.jpg"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />

        <div className=" flex flex-col text-white text-center p-3">
          <h3 className=" text-4xl  p-2 text-fuchsia-600 font-mono">
            Anime collections
          </h3>
          <p className=" text-slate-200">
            saf afdsfsafs dsfdafdasfasfsa fdsadfafdassfdsf safdasfasdfsa
            dsafasfasfsa safdasfdasfdas asdfasdfasfas asfafdas ;lkajsklfdjaskj
            dklsajfklasjfas sajfkasj alk
          </p>
        </div>
      </div>
      <div className=" flex justify-start rounded p-8 homeComponent ">
        <div className=" flex flex-col text-white text-center p-3">
          <h3 className=" text-4xl  p-2 text-fuchsia-600 font-mono">
            Kdrama collections
          </h3>
          <p className=" text-slate-200">
            saf afdsfsafs dsfdafdasfasfsa fdsadfafdassfdsf safdasfasdfsa
            dsafasfasfsa safdasfdasfdas asdfasdfasfas asfafdas ;lkajsklfdjaskj
            dklsajfklasjfas sajfkasj alk
          </p>
        </div>
        <img
          src={"/AOfAD.jpg"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />
        <img
          src={"/TrueB.jpg"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />
        <img
          src={"/her.png"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />
      </div>
      <div className=" flex justify-start rounded p-8 homeComponent">
        <img
          src={"/Titanic.jpg"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />
        <img
          src={"/WWZ.jpg"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />
        <img
          src={"/Maleficent.jpg"}
          placeholder="blur"
          className=" w-60 m-2 rounded-md"
        />

        <div className=" flex flex-col text-white text-center p-3">
          <h3 className=" text-4xl  p-2 text-fuchsia-600 font-mono">
            Hollywood collections
          </h3>
          <p className=" text-slate-200">
            saf afdsfsafs dsfdafdasfasfsa fdsadfafdassfdsf safdasfasdfsa
            dsafasfasfsa safdasfdasfdas asdfasdfasfas asfafdas ;lkajsklfdjaskj
            dklsajfklasjfas sajfkasj alk
          </p>
        </div>
      </div>
    </div>
  );
}
