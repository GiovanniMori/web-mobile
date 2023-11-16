import React from "react";
import prisma from "@/lib/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  return <div>{user?.name}</div>;
}
