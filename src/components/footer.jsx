import {Flex, Grid, GridItem, Image} from "@chakra-ui/react";

import Logo from "../images/logo2.svg";
import InstagramLogo from "../images/icon-instagram.svg";
import FacebookLogo from "../images/icon-facebook.svg";
import PinterestLogo from "../images/icon-pinterest.svg";
import TwitterLogo from "../images/icon-twitter.svg";

import FooterItem from "./footerItem";

function Footer() {
  const footerContent = [
    {
      title: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  return (
    <Grid
      backgroundColor="colorViolet.200"
      columnGap={{lg: "50px"}}
      gridTemplateColumns={{lg: "repeat(3, 1fr)"}}
      justifyItems="center"
      px={{lg: "200px"}}
      py={{base: "10", lg: "20"}}
      textAlign={{base: "center", lg: "start"}}
    >
      <Image py={{base: "10", lg: "0"}} src={Logo} width="100px" />
      <Grid gap={12} gridTemplateColumns={{lg: "repeat(3, 1fr)"}}>
        {footerContent.map((item) => (
          <GridItem key={item.title}>
            <FooterItem links={item.links} title={item.title} />
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent="flex-end" mt={{base: "10", lg: "0"}}>
        <Image cursor="pointer" height="25px" mx={3} src={FacebookLogo} width="25px" />
        <Image cursor="pointer" height="25px" mx={3} src={TwitterLogo} width="25px" />
        <Image cursor="pointer" height="25px" mx={3} src={PinterestLogo} width="25px" />
        <Image cursor="pointer" height="25px" mx={3} src={InstagramLogo} width="25px" />
      </Flex>
    </Grid>
  );
}

export default Footer;
