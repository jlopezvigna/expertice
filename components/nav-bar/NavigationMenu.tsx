import {
  NavigationMenu as MagicNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { mainNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

import Link from "next/link";
import * as React from "react";

export function NavigationMenu({ isHeroSection }: { isHeroSection: boolean }) {
  return (
    <MagicNavigationMenu>
      <NavigationMenuList>
        {mainNavigation.map((item) => (
          <NavigationMenuItem key={item.name}>
            {item.submenu ? (
              <>
                <NavigationMenuTrigger
                  className={isHeroSection ? "text-white" : "text-foreground"}
                >
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {item.submenu.map((subItem) => (
                      <ListItem
                        key={subItem.name}
                        title={subItem.name}
                        href={subItem.href}
                        Icon={subItem.icon}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    isHeroSection ? "text-white" : "text-foreground",
                    navigationMenuTriggerStyle()
                  )}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </MagicNavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    Icon: LucideIcon;
    href: string;
  }
>(({ className, title, href, children, Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center gap-2">
            <Icon className="w-4 h-4" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
