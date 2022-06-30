import {Stack, Input, FormControl, Flex, Button, Grid} from "@chakra-ui/react";
import {useState} from "react";
import axios from "axios";

import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";

import ResultUrl from "./resultUrl";

function UrlShorter() {
  const [value, setValue] = useState("");
  const [links, setLinks] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${value}/very/long/link.html`,
    );
    const shortLink = await result.data.result.short_link;
    const longLink = await result.data.result.original_link;

    const arrayData = {
      shortLink: shortLink,
      longLink: longLink,
    };

    await setLinks([...links, arrayData]);
  }

  return (
    <>
      <Flex
        alignItems="center"
        backgroundColor="colorViolet.100"
        backgroundImage={{base: `${bgShortenMobile}`, lg: `${bgShortenDesktop}`}}
        backgroundPosition={{base: "80px -50px", lg: "-2px 0px"}}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        my={20}
        px={5}
        py={8}
        rounded="lg"
      >
        <FormControl>
          <form className="form" onSubmit={handleSubmit}>
            <Input
              backgroundColor="white"
              id="email"
              placeholder="Shorten a link here..."
              py={6}
              type="text"
              value={value}
              width={{base: "100%", lg: "1090px"}}
              onChange={handleChange}
            />
            <Stack width={{base: "100%", lg: "100px"}}>
              <Button
                backgroundColor="colorCyan.50"
                color="white"
                height="100%"
                ml={{lg: "10px"}}
                mt={{base: "3", lg: "0"}}
                py={3}
                rounded="md"
                textAlign="center"
                type="submit"
                value="Submit"
                width={{lg: "100px"}}
              >
                Shorten it!
              </Button>
            </Stack>
          </form>
        </FormControl>
      </Flex>
      {links.map((item) => (
        <Stack key={links.indexOf(item)}>
          <Grid>
            <ResultUrl longLink={item.longLink} shortLink={item.shortLink} />
          </Grid>
        </Stack>
      ))}
    </>
  );
}

export default UrlShorter;
