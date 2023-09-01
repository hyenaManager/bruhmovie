import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className=" flex justify-between bg-none items-center mainNav fixed right-0 left-0 bg-black top-0">
        <div>
          <Link
            href={"/"}
            className=" text-4xl font-mono text-fuchsia-600 p-2 space-x-2"
          >
            STN
          </Link>
        </div>

        <Link href={"/feed"} className={" p-3 mainNavLink "}>
          Feed
        </Link>
        <Link href={"/feed"} className={" p-3 mainNavLink "}>
          blink
        </Link>
        <Link href={"/feed"} className={" p-3 mainNavLink "}>
          Page
        </Link>
        <Link href={"/feed"} className={" p-3 mainNavLink "}>
          Shorts
        </Link>
      </nav>
    </>
  );
}
