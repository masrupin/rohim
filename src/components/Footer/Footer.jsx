import { memo } from "react";
import Link from "next/link";

import {
  Copyright,
  Footer,
  Item,
  Menu,
  MenuWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>
        <div>
          <Link href="/" passHref>
            <Title>Rohim  Motor</Title>
          </Link>
          <Copyright>
            Copyright &copy; {new Date().getFullYear()} Design By: <a href="https://youtube.com/@deaafrizal?si=OrRIJC0UpcUCXHHl" target="_blank">Dea Afrizal</a>
          </Copyright>
        </div>
        <MenuWrapper>
          <Menu>
            <SubTitle>Rohim Motor</SubTitle>
            <Link href="https://maps.app.goo.gl/bQ4LCG6VqRKLRonu5" passHref>
            <a target="_blank">
            <Item>Alamat</Item>
            </a>
            </Link>
            {/* <Link href="/about" passHref>
              <Item>Tentang Kami</Item>
            </Link> */}
          </Menu>
          <Menu>
            <SubTitle>Kontak</SubTitle>
            <a
              target="_blank"
              href="https://wa.me/6285330851150"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <Item>Whatsapp</Item>
            </a>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </Footer>
  );
};

export default memo(FooterComponent);
