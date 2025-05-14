"use client";

import type * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Computer,
  Cross,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: any;
}

interface UsageItem {
  label: string;
  value: string;
  percentage?: number;
  variant?: "default" | "success" | "warning";
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function InternalSidebar({
  collapsed = false,
  onToggle,
  className,
}: SidebarProps) {
  const pathname = usePathname();

  const experimentalSources: NavItem[] = [
    {
      title: "Carbon",
      href: "/carbon",
      icon: <Computer className="h-4 w-4" />,
    },
    {
      title: "CMS",
      href: "/cms",
      icon: <Cross className="h-4 w-4" />,
    },
  ];

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="pt-16">
      <SidebarContent>
        {/* Main Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/"}
                  tooltip="Home"
                >
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {experimentalSources.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
