import { ThemeToggole } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
            <Link href={'/'}>Home</Link>
            <DropdownMenuShortcut>
              <Home />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={'/sobre'}>Sobre</Link>
            <DropdownMenuShortcut>
              <User />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={'/projetos'}>Projetos</Link>
            <DropdownMenuShortcut>
              <FolderKanban />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={'/contato'}>Contato</Link>
            <DropdownMenuShortcut>
              <Smartphone />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Carreira</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Currículo</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Link href={'https://www.linkedin.com/in/marciomsilva/'} target="_blank">Currículo em PDF</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Página Web</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={'https://www.linkedin.com/in/marciomsilva/'} target="_blank">GitHub</Link>
          <DropdownMenuShortcut>
            <Github />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={'https://www.linkedin.com/in/marciomsilva/'} target="_blank">WhatsApp</Link>
          <DropdownMenuShortcut>
            <MessageCircleCode />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={'mailto:marciomoraes.cdd@gmail.com'}>E-Mail</Link>
          <DropdownMenuShortcut>
            <MailPlus />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
