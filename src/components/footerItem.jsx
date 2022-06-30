import {Text, Heading} from "@chakra-ui/react";

function FooterItem({title, links}) {
  return (
    <>
      <Heading color="white" fontSize="18px" fontWeight="700" pb={5}>
        {title}
      </Heading>
      {links.map((link) => (
        <Text
          key={link}
          _hover={{color: "colorCyan.50"}}
          color="colorGray.100"
          cursor="pointer"
          fontSize="16px"
          fontWeight="500"
          py={1}
        >
          {link}
        </Text>
      ))}
    </>
  );
}

export default FooterItem;
