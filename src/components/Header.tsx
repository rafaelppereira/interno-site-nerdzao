import Link from "next/link";
import { ArrowRight, List } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full z-40 backdrop-blur-sm bg-gray-opacity fixed left-0 top-0">
      <div className="h-20 px-8 w-full max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <figure>
              <img
                className="w-60 lg:w-64"
                src="/logo.svg"
                alt="Logo do Nerdzão Day"
              />
            </figure>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-5 lg:gap-10 ml-10">
          <ul className="flex items-center transition-all text-sm text-gray-300 font-light truncate">
            <button
              className="hover:text-white hover:border-b-2 border-b-2 border-gray-opacity hover:border-pink-500 px-2 block h-20"
              type="button"
            >
              Home
            </button>
            <button
              className="hover:text-white hover:border-b-2 border-b-2 border-gray-opacity hover:border-pink-500 px-2 block h-20 transition-all"
              type="button"
            >
              Sobre
            </button>
            <button
              className="hover:text-white hover:border-b-2 border-b-2 border-gray-opacity hover:border-pink-500 px-2 block h-20  transition-all"
              type="button"
            >
              Palestrantes
            </button>
            <button
              className="hover:text-white hover:border-b-2 border-b-2 border-gray-opacity hover:border-pink-500 px-2 block h-20  transition-all"
              type="button"
            >
              Programação
            </button>
            <button
              className="hover:text-white hover:border-b-2 border-b-2 border-gray-opacity hover:border-pink-500 px-2 block h-20  transition-all"
              type="button"
            >
              Apoiadores
            </button>
            <button
              className="hover:text-white hover:border-b-2 border-b-2 border-gray-opacity hover:border-pink-500 px-2 block h-20 transition-all"
              type="button"
            >
              Seja um palestrante
            </button>
          </ul>

          <Link href="/">
            <div className="bg-pink-500 text-white text-sm px-4 py-2 rounded-full flex items-center gap-3 hover:animate-pulse  hover:ring-2 hover:ring-pink-500 transition-all">
              <ArrowRight size={20} />
              Incrições
            </div>
          </Link>
        </nav>

        <button
          className="text-white flex lg:hidden items-center justify-center pl-2 pt-2 pb-2"
          type="button"
        >
          <List size={30} weight="fill" />
        </button>
      </div>
    </header>
  );
}
