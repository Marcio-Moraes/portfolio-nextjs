import { rolarPara } from "@/app/helpers/rolarPara"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,  
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FolderKanban, Github, Home, MailPlus, Menu, MessageCircleCode, Smartphone, User } from "lucide-react"
import Link from "next/link"

export function MenuDropDownTopo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded">
            <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel className="text-center">Márcio Moraes - DEV</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={''} onClick={() => rolarPara('home')}>Home</Link>
            <DropdownMenuShortcut>
              <Home />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={''} onClick={() => rolarPara('sobre')}>Sobre</Link>
            <DropdownMenuShortcut>
              <User />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={''} onClick={() => rolarPara('projetos')}>Projetos</Link>
            <DropdownMenuShortcut>
              <FolderKanban />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={''} onClick={() => rolarPara('cursos')}>Educação</Link>
            <DropdownMenuShortcut>
              <FolderKanban />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={''} onClick={() => rolarPara('contato')}>Contato</Link>
            <DropdownMenuShortcut>
              <Smartphone />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
