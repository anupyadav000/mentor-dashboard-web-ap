import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  const [openListProfileDiv, setOpenListProfileDiv] = React.useState(false);
  const [openProfileDiv, setOpenProfileDiv] = React.useState(false);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      paddingTop={"1%"}
      paddingBottom={"1%"}
      borderBottom={"1px solid #E2E8F0"}
      paddingLeft={"10%"}
      paddingRight={"10%"}
    >
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Image
          src="https://mentor.preplaced.in/static/media/NewPreplacedLogo.e846a58f515c91642941386412cf5ac6.svg"
          alt="preplaced-logo"
        ></Image>
      </Box>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          minWidth={"100%"}
          onClick={() => setOpenListProfileDiv(!openListProfileDiv)}
        >
          <Box
            border={"1px solid #16A34A"}
            backgroundColor={"#F0FFF4"}
            maxWidth={"85%"}
            padding={"3%"}
            borderRadius={"8px"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              color={"#90E0AB"}
              fontWeight={"extrabold"}
            >
              <Image
                src="https://mentor.preplaced.in/static/media/GreenVerified.30f40f24aa3394f133f7fb38e361a57e.svg"
                alt="right-icon"
              ></Image>
              <Text paddingLeft={"5%"} paddingRight={"5%"}>
                Your Profile is listed
              </Text>
              <Image
                display={!openListProfileDiv ? "block" : "none"}
                src="https://mentor.preplaced.in/static/media/GreenDownIcon.117b45644d13c9e66c9ec5abeb12127f.svg"
                alt="right-icon"
              ></Image>
              <Image
                display={openListProfileDiv ? "block" : "none"}
                src="https://mentor.preplaced.in/static/media/GreenDownIcon.117b45644d13c9e66c9ec5abeb12127f.svg"
                alt="right-icon"
              ></Image>
            </Box>
          </Box>
          <Box
            position={"absolute"}
            top={"80px"}
            display={openListProfileDiv ? "block" : "none"}
            border={"1px solid #16A34A"}
            padding={"1%"}
            minWidth={"16.5%"}
            borderRadius={"8px"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              zIndex={"10"}
              onClick={() => setOpenListProfileDiv(false)}
              color={"#27C661"}
            >
              <Image
                src="https://mentor.preplaced.in/static/media/GreenVerified.30f40f24aa3394f133f7fb38e361a57e.svg"
                alt="right-icon"
              ></Image>
              <Text paddingLeft={"5%"} fontWeight={"extrabold"}>
                Your Profile is listed
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              onClick={() => setOpenListProfileDiv(false)}
              paddingTop={"7%"}
              color={"#F7ABAB"}
            >
              <Image
                src="https://mentor.preplaced.in/static/media/RedWarningTriangle.58b7b8ac3a408aeb47fffa15cf580df1.svg"
                alt="right-icon"
              ></Image>
              <Text paddingLeft={"5%"} fontWeight={"extrabold"}>
                I want to get de-listed
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          minWidth={"30%"}
          onClick={() => setOpenProfileDiv(!openProfileDiv)}
        >
          <Box maxWidth={"65%"} padding={"3%"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              fontWeight={"extrabold"}
            >
              <Image
                height={"60px"}
                width={"80px"}
                border={"3px solid #002AF5"}
                borderRadius={"100%"}
                marginRight={"5px"}
                src="https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2FAnup%20Yadav0.6202994618214566?alt=media&token=a86c347c-9aaf-4a78-a247-f239ed488280"
                alt="right-icon"
              ></Image>
              <Image
                display={openListProfileDiv === false ? "block" : "none"}
                src="https://mentor.preplaced.in/static/media/GreenDownIcon.117b45644d13c9e66c9ec5abeb12127f.svg"
                alt="top-icon"
              ></Image>
              <Image
                display={openListProfileDiv === true ? "block" : "none"}
                src="https://mentor.preplaced.in/static/media/GreenDownIcon.117b45644d13c9e66c9ec5abeb12127f.svg"
                alt="bottom-icon"
              ></Image>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
