import {Grid, Heading, Stack, Text} from "@chakra-ui/react";

import StatisticsCard from "../components/statisticsCard";
import IconBrand from "../images/icon-brand-recognition.svg";
import IconDetailed from "../images/icon-detailed-records.svg";
import IconFully from "../images/icon-fully-customizable.svg";

function AdvancedStatistics() {
  const cardsItems = [
    {
      title: "Brand Recognition",
      text: `Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content.`,
      img: IconBrand,
      dividerLine: true,
      customMargin: "0",
    },
    {
      title: "Detailed Records",
      text: `Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions.`,
      img: IconDetailed,
      dividerLine: true,
      customMargin: "50px",
    },
    {
      title: "Fully Customizable",
      text: `Improve brand awareness and content discoverability through customizable 
      links, supercharging audience engagement.`,
      img: IconFully,
      dividerLine: false,
      customMargin: "100px",
    },
  ];

  return (
    <Stack backgroundColor="colorGray.50" id="features" py={10} textAlign="center">
      <Heading color="colorViolet.200" fontWeight="700" size="xl">
        Advanced Statistics
      </Heading>
      <Text color="colorViolet.50" fontWeight="500" pt={2}>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </Text>
      <Stack>
        <Grid columnGap="-200px" gridTemplateColumns={{lg: "repeat(5, 1fr)"}} mt="200px">
          {cardsItems.map((item) => (
            <StatisticsCard
              key={item.title}
              customMargin={item.customMargin}
              dividerLine={item.dividerLine}
              img={item.img}
              text={item.text}
              title={item.title}
            />
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default AdvancedStatistics;
