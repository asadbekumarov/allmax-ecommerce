"use client";

import {
  Home,
  ShoppingBag,
  PackagePlus,
  Shirt,
  Users,
  Settings,
  ChevronUp,
  User2,
  Sparkles,
  Layers,
  Plus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetTrigger } from "./ui/sheet";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import AddUser from "./AddUser";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-border/80">
      {/* Brand Header */}
      <SidebarHeader className="py-3 px-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg" className="hover:bg-primary/5">
              <Link href="/admin" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-sm tracking-wider shadow-sm shrink-0">
                  ALX
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-extrabold text-sm tracking-tight text-foreground leading-tight">
                    ALLMAX
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-amber-500" /> Fix Price Admin
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {/* Navigation Group 1: Asosiy */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/80 tracking-wider uppercase">
            Boshqaruv
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Boshqaruv Paneli">
                  <Link href="/admin">
                    <Home className="w-4 h-4 text-[#e30613]" />
                    <span className="font-semibold text-white">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Buyurtmalar">
                  <Link href="/admin/orders">
                    <ShoppingBag className="w-4 h-4 text-[#e30613]" />
                    <span className="font-medium text-zinc-200">Buyurtmalar</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge className="bg-[#e30613] text-white text-[10px] font-black shadow-[0_0_8px_rgba(227,6,19,0.6)]">
                  9 ta
                </SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Navigation Group 2: Tovarlar va Ombor */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-bold text-zinc-400 tracking-wider uppercase">
            Katalog & Ombor
          </SidebarGroupLabel>
          <SidebarGroupAction asChild title="Yangi tovar sahifasi">
            <Link href="/admin/products/new">
              <Plus className="w-4 h-4 text-zinc-400 hover:text-[#e30613]" />
            </Link>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Barcha tovarlar">
                  <Link href="/products">
                    <Shirt className="w-4 h-4 text-zinc-400" />
                    <span className="font-medium text-zinc-200">Barcha tovarlar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Yangi tovar qo'shish">
                  <Link href="/admin/products/new" className="font-bold text-[#e30613]">
                    <PackagePlus className="w-4 h-4 text-[#e30613]" />
                    <span>Yangi tovar qo&apos;shish</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton tooltip="Tezkor tovar qo'shish (Modal)">
                      <Layers className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs">Tezkor tovar (Modal)</span>
                    </SidebarMenuButton>
                  </SheetTrigger>
                  <AddProduct />
                </Sheet>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton tooltip="Kategoriya qo'shish">
                      <Plus className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs">Kategoriya qo&apos;shish</span>
                    </SidebarMenuButton>
                  </SheetTrigger>
                  <AddCategory />
                </Sheet>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Navigation Group 3: Mijozlar va Tizim */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/80 tracking-wider uppercase">
            Foydalanuvchilar
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Mijozlar ro'yxati">
                  <Link href="/users">
                    <Users className="w-4 h-4 text-violet-500" />
                    <span className="font-medium">Mijozlar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton tooltip="Yangi foydalanuvchi">
                      <Plus className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs">Menejer qo&apos;shish</span>
                    </SidebarMenuButton>
                  </SheetTrigger>
                  <AddUser />
                </Sheet>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 border-t border-border/80">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-10 hover:bg-muted/60">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                    AD
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-xs font-semibold truncate">Admin Administrator</span>
                    <span className="text-[10px] text-muted-foreground truncate">admin@allmax.uz</span>
                  </div>
                  <ChevronUp className="ml-auto w-3.5 h-3.5 text-muted-foreground" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/admin">Bosh sahifa</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/orders">Buyurtmalar</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/products/new">Yangi tovar</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
