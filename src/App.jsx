import {Stack} from "@chakra-ui/react";

import Home from "./pages/home";
import UrlShorter from "./components/urlShorter";
import AdvancedStatistics from "./pages/advancedStatistics";
import Boost from "./pages/boost";

function App() {
  return (
    <>
      <Home />
      <Stack backgroundColor="colorGray.50" mt="200px" px={{base: "5", lg: "50px"}}>
        <Stack mt={{base: "-170px", lg: "-140px"}}>
          <UrlShorter />
        </Stack>
        <AdvancedStatistics />
      </Stack>
      <Boost />
    </>
  );
}

export default App;
