import Image from "next/image";
import Head from "./components/head";

export default function Home() {
  return (
    <main className=" flex justify-center bg-black flex-col">
      <h2 className=" text-4xl">Home page</h2>
      <Head />
    </main>
  );
}
