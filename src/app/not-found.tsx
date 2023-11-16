import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col gap-2 text-center">
        <p>Não conseguimos encontrar essa página</p>
        <Button>
          <Link href="/"> Voltar ao início</Link>
        </Button>
      </div>
    </div>
  );
}
