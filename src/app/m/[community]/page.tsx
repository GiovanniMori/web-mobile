import prisma from "@/lib/prisma";
import React from "react";

export default async function Page({
  params,
}: {
  params: { community: string };
}) {
  const user = await prisma.community.findUnique({
    where: {
      id: params.community,
    },
  });
  return <div>{user?.name}</div>;
}
