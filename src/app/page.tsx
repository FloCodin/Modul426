import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {

  return (
    <> <div className="w-full flex justify-center">
      <NavigationMenu >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="justify-center bg-teal-100">Produkte</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Produkte</NavigationMenuLink>
            </NavigationMenuContent>
            <NavigationMenuTrigger className="justify-center bg-teal-100">Account</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Account</NavigationMenuLink>
            </NavigationMenuContent>
            <NavigationMenuTrigger className="justify-center bg-teal-100">Über Mich</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>aboutMe</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div className="flex justify-center w-full">

      <div className="p-2 ">
      <Card className="justify-center bg-teal-100">
        <CardHeader>
          <CardTitle>Taschen </CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      </div>

      <div className="p-2 ">
        <Card className="justify-center bg-teal-100">
          <CardHeader>
            <CardTitle>Individuelle Anfragen</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

      <div className="p-2 ">
        <Card className="justify-center bg-teal-100">
          <CardHeader>
            <CardTitle>Boulder Bags</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

    </div>
    </>
  );
}
