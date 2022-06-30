import {Stack, Link, Flex, Button, Divider, Grid} from "@chakra-ui/react";
import {useState} from "react";
import CopyToClipboard from "react-copy-to-clipboard";

function ResultUrl({longLink, shortLink}) {
  const [copied, setCopied] = useState(false);

  return (
    <Grid
      alignItems="center"
      backgroundColor="white"
      gridTemplateColumns={{base: "repeat(1, 300px)", lg: "repeat(2, 600px)"}}
      justifySelf="center"
      overflowX="hidden"
      px={5}
      py={8}
      rounded="lg"
    >
      <Flex width={{base: "100%"}}>
        <Link
          isExternal
          fontSize="19px"
          height="32px"
          href={longLink}
          overflowX="hidden"
          overflowY="hidden"
        >
          {longLink}
        </Link>
      </Flex>
      <Divider borderColor="colorGray.100" borderWidth="1px" display={{lg: "none"}} mb={5} mt={2} />
      <Stack width={{base: "100%"}}>
        <Flex
          alignItems={{base: "start", lg: "center"}}
          flexDirection={{base: "column", lg: "row"}}
          justifyContent={{lg: "end"}}
        >
          <Link isExternal color="colorCyan.50" href={longLink}>
            {shortLink}
          </Link>
          <Stack mt={{base: "2", lg: "0"}} width={{base: "100%", lg: "100px"}}>
            {copied ? (
              <Button
                backgroundColor="colorViolet.100"
                color="white"
                fontSize="19px"
                height="100%"
                ml={{lg: "10px"}}
                mt={{base: "3", lg: "0"}}
                py={{base: "4", lg: "3"}}
                rounded="md"
                textAlign="center"
                type="submit"
                value="Submit"
                width={{lg: "100px"}}
              >
                Copied!
              </Button>
            ) : (
              <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
                <Button
                  backgroundColor="colorCyan.50"
                  color="white"
                  fontSize="19px"
                  height="100%"
                  ml={{lg: "10px"}}
                  mt={{base: "3", lg: "0"}}
                  py={{base: "4", lg: "3"}}
                  rounded="md"
                  textAlign="center"
                  type="submit"
                  value="Submit"
                  width={{lg: "100px"}}
                >
                  Copy!
                </Button>
              </CopyToClipboard>
            )}
          </Stack>
        </Flex>
      </Stack>
    </Grid>
  );
}

export default ResultUrl;
