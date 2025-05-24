"use client";

import { Container } from "@Components/Container";
import Image from "next/image";
import React, { useEffect } from "react";
import s from "./styles.module.scss";

function HomePage(): React.ReactElement {
  const refParagraph = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(refParagraph.current);
  }, []);

  return (
    <div className={s.wrapper}>
      <Container>
        <Image
          src={"/images/banner.png"}
          alt={"unsplash"}
          width={800}
          height={800}
        />
      </Container>
    </div>
  );
}

export default HomePage;
