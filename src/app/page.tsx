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
import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
  });
  return {
    props: { products },
  };
};


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
      <div>
        {products.map((product) => (
            <div key={product.id} className="p-4 bg-gray-100 m-2">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <div className="flex">
                {product.images.map((image) => (
                    <Image key={image.id} src={image.url} width={100} height={100} alt={product.name} />
                ))}
              </div>
            </div>
        ))}
      </div>

    </div>
    </>
  );
}
