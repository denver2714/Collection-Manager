"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProps {
  user: {
    name: string;
    description: string;
    image: string;
  };
}

const HoverUserComponent = ({ user }: UserProps) => {
  if (!user) return <div>User not found</div>;

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.reload();
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card onClick={handleCardClick} className="w-full max-w-md cursor-pointer">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
            <img
              src={user.image}
              alt={user.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <CardTitle className="text-2xl">{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center">{user.description}</p>
      </CardContent>
    </Card>
  );
};

export default HoverUserComponent;
