"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function App() {
  const { data: session, status } = useSession();
  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarBrand className="mr-4 gap-2 flex">
          <Image
            src="/Mackenzie_M.svg"
            alt="Mack"
            className="dark:invert"
            width={48}
            height={48}
            priority
          />
          <p className="hidden sm:block font-bold text-red-500">Mackenzie</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3 w-full">
          <NavbarItem className="bg-red-500 w-full">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10 w-full",
                mainWrapper: "h-full w-full",
                input: "text-small w-full",
                inputWrapper:
                  "h-full font-normal  w-full text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Pesquisar"
              // size="md"
              startContent={<SearchIcon size={18} />}
              type="search"
            />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        {session ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={session?.user?.image || ""}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Logado como</p>
                <p className="font-semibold">{session?.user?.email}</p>
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => signOut()}
              >
                Sair
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button onClick={() => signIn("github")}>Entrar com Github</Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}
