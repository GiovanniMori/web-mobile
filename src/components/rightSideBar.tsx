"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { newCommunitySchema } from "@/schema/newCommunity";
import axios from "axios";
import { error } from "console";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RightSideBar() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newCommunitySchema>({
    resolver: zodResolver(newCommunitySchema),
  });
  async function onSubmit(data: newCommunitySchema) {
    await axios.post("/api/community", data).then(() => {
      onClose();
    });
  }
  return (
    <div>
      Página Inicial
      <div>
        Sua página pessoal do Reddit. Visite-a para ficar em dia com suas
        comunidades preferidas.
      </div>
      <Link href={`/submit`} replace>
        Postar
      </Link>
      <Button onPress={onOpen}>Criar uma comunidade</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Criar uma comunidade
              </ModalHeader>
              <ModalBody>
                <Input
                  {...register("name")}
                  label="Nome da comunidade"
                  placeholder="Insira um nome"
                  variant="bordered"
                  errorMessage={errors.name?.message}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button color="primary" type="submit">
                  Enviar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
