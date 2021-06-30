import React, {useState} from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavbarGenral() {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="flex flex-wrap  justify-between px-2 py-1 navbar-expand-xl bg-gray-100">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
            <a
              className="text-sm flex  font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
             UserList
            </a>
            </Link>
            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
          </div>
        </div>
      </nav>
    </>
  );
}