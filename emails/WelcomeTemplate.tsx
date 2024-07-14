import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://codewithmosh.com/">www.codewithmosh.com</Link>
          </Container>
        </body>
      </Tailwind>
    </html>
  );
};

export default WelcomeTemplate;
