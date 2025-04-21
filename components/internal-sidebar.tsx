"use client";

import type * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  FlaskConical,
  LayoutDashboard,
  Terminal,
  MonitorPlay,
  Library,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: {
    text: string;
  };
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
  const router = useRouter();
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  const mainNavItems: NavItem[] = [
    {
      title: "Learn More",
      href: "https://ui.shadcn.com/docs/registry",
      icon: <Library className="h-4 w-4" />,
    },
    {
      title: "Experimental",
      href: "/experimental",
      icon: <FlaskConical className="h-4 w-4" />,
    },
  ];

  const templateSources: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      title: "Couch Surfer",
      href: "/couch-surfer",
      icon: <MonitorPlay className="h-4 w-4" />,
    },
    {
      title: "Terminal",
      href: "/terminal",
      icon: <Terminal className="h-4 w-4" />,
    },
  ];

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <header className="px-2 py-4">
          <h1 className="text-base text-[var(--zds-text-stronger)] whitespace-nowrap">
            <span className="font-bold">Cloudscape</span>
            <span className="font-normal"> Design System</span>
          </h1>
        </header>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Nav Items */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem className="py-1">
              <SidebarMenuButton
                asChild
                isActive={pathname === "/"}
                tooltip="Home"
              >
                <Link href="/" className="text-black">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem className="py-1" key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.href ||
                      (pathname === "" && item.href === "/")
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.href} className="text-black">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge
                      className={cn(
                        "border bg-muted text-foreground border-border"
                      )}
                    >
                      {item.badge.text}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Template Sources */}
        <SidebarGroup>
          <SidebarGroupLabel>Template Sources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {templateSources.map((item) => (
                <SidebarMenuItem className="py-1" key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.title}
                  >
                    <Link href={item.href} className="text-black">
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
