import { Box, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Availability(props) {
  return (
    <Box>
      <Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Text padding={"3%"} textAlign={"center"}>
            You will receive bookings in timezone <span>Asia/Calcutta</span>
          </Text>
          <Box
            maxWidth={"100%"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            padding={"5%"}
          >
            <Select placeholder="From :01.00" maxWidth={"20%"}>
              <option value="option3">00.00</option>
              <option value="option1">02.00</option>
              <option value="option2">03.00</option>
              <option value="option3">04.00</option>
              <option value="option3">05.00</option>
              <option value="option3">06.00</option>
              <option value="option3">07.00</option>
              <option value="option3">08.00</option>
              <option value="option3">09.00</option>
              <option value="option3">10.00</option>
              <option value="option3">11.00</option>
              <option value="option3">12.00</option>
              <option value="option3">13.00</option>
              <option value="option3">14.00</option>
              <option value="option3">15.00</option>
              <option value="option3">16.00</option>
              <option value="option3">17.00</option>
              <option value="option3">18.00</option>
              <option value="option3">19.00</option>
              <option value="option3">20.00</option>
              <option value="option3">21.00</option>
              <option value="option3">22.00</option>
              <option value="option3">23.00</option>
            </Select>
            <Select placeholder="From :01.00" maxWidth={"20%"}>
              <option value="option3">00.00</option>
              <option value="option1">02.00</option>
              <option value="option2">03.00</option>
              <option value="option3">04.00</option>
              <option value="option3">05.00</option>
              <option value="option3">06.00</option>
              <option value="option3">07.00</option>
              <option value="option3">08.00</option>
              <option value="option3">09.00</option>
              <option value="option3">10.00</option>
              <option value="option3">11.00</option>
              <option value="option3">12.00</option>
              <option value="option3">13.00</option>
              <option value="option3">14.00</option>
              <option value="option3">15.00</option>
              <option value="option3">16.00</option>
              <option value="option3">17.00</option>
              <option value="option3">18.00</option>
              <option value="option3">19.00</option>
              <option value="option3">20.00</option>
              <option value="option3">21.00</option>
              <option value="option3">22.00</option>
              <option value="option3">23.00</option>
            </Select>
            <button class="w-[22px] h-[22px]">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_3161_17544)">
                  <path
                    d="M13 22.75C7.07 22.75 2.25 17.93 2.25 12C2.25 6.07 7.07 1.25 13 1.25C18.93 1.25 23.75 6.07 23.75 12C23.75 17.93 18.93 22.75 13 22.75ZM13 2.75C7.9 2.75 3.75 6.9 3.75 12C3.75 17.1 7.9 21.25 13 21.25C18.1 21.25 22.25 17.1 22.25 12C22.25 6.9 18.1 2.75 13 2.75Z"
                    fill="#F97066"
                  ></path>
                  <path
                    d="M17 12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75Z"
                    fill="#F97066"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_d_3161_17544"
                    x="-1"
                    y="-1"
                    width="28"
                    height="28"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3161_17544"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3161_17544"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </button>
            <button class="w-[22px] h-[22px]">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame" filter="url(#filter0_d_3161_17804)">
                  <path
                    id="Vector"
                    d="M13 22.75C7.07 22.75 2.25 17.93 2.25 12C2.25 6.07 7.07 1.25 13 1.25C18.93 1.25 23.75 6.07 23.75 12C23.75 17.93 18.93 22.75 13 22.75ZM13 2.75C7.9 2.75 3.75 6.9 3.75 12C3.75 17.1 7.9 21.25 13 21.25C18.1 21.25 22.25 17.1 22.25 12C22.25 6.9 18.1 2.75 13 2.75Z"
                    fill="#12B76A"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M17 12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75Z"
                    fill="#12B76A"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M13 16.75C12.59 16.75 12.25 16.41 12.25 16V8C12.25 7.59 12.59 7.25 13 7.25C13.41 7.25 13.75 7.59 13.75 8V16C13.75 16.41 13.41 16.75 13 16.75Z"
                    fill="#12B76A"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_d_3161_17804"
                    x="-1"
                    y="-1"
                    width="28"
                    height="28"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3161_17804"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3161_17804"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </button>
          </Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
      <Box
        backgroundColor={"#F9FAFB"}
        borderRadius={"20px"}
        margin="5%"
        padding={"5%"}
      >
        <Box>
          <Text fontSize={"xl"} fontWeight={"extrabold"}>
            Taking a Break? Setup your Unavailability.
          </Text>
        </Box>
        <Box paddingTop={"2%"} color={"#667085"}>
          <Text>
            To avoid receiving bookings during your absence, we strongly
            recommend establishing unavailability dates.
          </Text>
        </Box>
        <Box
          paddingTop="2%"
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          backgroundColor={"#FFFFFF"}
          maxWidth={"50%"}
          justifyContent={"center"}
          padding={"3%"}
          marginTop="6%"
          borderRadius={"20px"}
        >
          <Text paddingRight={"4%"} fontWeight={"medium"} fontSize={"xl"}>
            <Link to="/unavailable">Add Unavailable Dates</Link>
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0003 4.16666V15.8333M4.16699 9.99999H15.8337"
              stroke="#344054"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default Availability;
