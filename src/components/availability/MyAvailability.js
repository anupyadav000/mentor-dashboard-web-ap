import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Availability from "./Availability";
import Unavailability from "./Unavailability";

function MyAvailability(props) {
  const [tabName, setTabName] = React.useState("availability");
  return (
    <Box
      borderLeft={"1px solid #E2E8F0"}
      height={"400%"}
      width={"700px"}
      borderRight={"1px solid #E2E8F0"}
    >
      <Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box padding={"7%"}>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              My Availability
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            margin={"7%"}
            marginTop={"0%"}
            borderBottom={"1px solid #E2E8F0"}
          >
            <Box
              onClick={() => setTabName("availability")}
              paddingBottom={"3%"}
              borderBottom={"2px solid"}
              color={tabName === "availability" ? "blue" : "black"}
              borderBottomColor={tabName === "availability" ? "blue" : "white"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              width={"50%"}
            >
              <Text>Update Availability</Text>
            </Box>
            <Box
              onClick={() => setTabName("unavailability")}
              paddingBottom={"3%"}
              borderBottom={"2px solid"}
              color={tabName === "unavailability" ? "blue" : "black"}
              borderBottomColor={
                tabName === "unavailability" ? "blue" : "white"
              }
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              width={"50%"}
            >
              <Text>Unavailable Dates</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box display={tabName === "availability" ? "block" : "none"}>
            <Availability></Availability>
          </Box>
          <Box display={tabName === "unavailability" ? "block" : "none"}>
            <Unavailability></Unavailability>
          </Box>
        </Box>
      </Box>
      <Box minWidth={"30%"}></Box>
    </Box>
  );
}

export default MyAvailability;
