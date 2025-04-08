import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip, IconButton } from "@material-tailwind/react";
import { Linkedin, Github } from "iconoir-react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export function MobileHomeCard() {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" className="mb-2 text-green-950">
          A personal portfolio website designed and developed by <strong>Marl Bermudo</strong>.
        </Typography>
      </CardBody>
      <CardFooter className="socials flex justify-center gap-7 p-2">
        <Tooltip>
          <Tooltip.Trigger as={SocialIcon} variant="ghost">
            <SocialIcon
              href="https://www.linkedin.com/in/marl-bermudo/"
              url="www.linkedin.com"
              className="icon square-icon"
            />
          </Tooltip.Trigger>
          <Tooltip.Content className="bg-green-950 text-white p-2">
            LinkedIn Profile
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger as={SocialIcon} variant="ghost">
            <SocialIcon href="https://github.com/marlberm2014" url="www.github.com" className="icon" />
          </Tooltip.Trigger>
          <Tooltip.Content className="bg-green-950 text-white p-2">
            Github Profile
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
