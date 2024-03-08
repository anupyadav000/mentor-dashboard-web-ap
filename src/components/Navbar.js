import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openedTab, setOpenedTab] = React.useState("");
  const handleSetOpenedTab = (tab) => {
    if (openedTab === tab && openedTab.indexOf("anchor") >= 0) {
      setOpenedTab("");
    } else {
      setOpenedTab(tab);
    }
  };
  return (
    <Box paddingTop={"4%"}>
      <Box padding={"5%"} paddingLeft={"0%"}>
        <Box>
          <Text fontSize={"small"} fontWeight={"thin"}>
            MENTEE RELATED
          </Text>
        </Box>
        <Box padding={"2%"} paddingTop={"5%"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            onClick={() => handleSetOpenedTab("trial-mentees-anchor")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M21 19V17C21 15.1362 19.7252 13.5701 18 13.126M14.5 1.29076C15.9659 1.88415 17 3.32131 17 5C17 6.67869 15.9659 8.11585 14.5 8.70924M16 19C16 17.1362 16 16.2044 15.6955 15.4693C15.2895 14.4892 14.5108 13.7105 13.5307 13.3045C12.7956 13 11.8638 13 10 13H7C5.13623 13 4.20435 13 3.46927 13.3045C2.48915 13.7105 1.71046 14.4892 1.30448 15.4693C1 16.2044 1 17.1362 1 19M12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z"
                stroke="#0029F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Text
              paddingLeft={"4%"}
              fontWeight={"medium"}
              color={openedTab.indexOf("mentees") >= 0 ? "blue" : "default"}
            >
              <Link to="/mentees/trial/upcoming">My Mentees</Link>
            </Text>
          </Box>
          <Box
            borderLeft={"1px solid black"}
            paddingLeft={"5%"}
            marginLeft={"5%"}
            margin={"6%"}
            display={openedTab.indexOf("mentees") >= 0 ? "block" : "none"}
          >
            <Box
              padding={"4%"}
              fontWeight={"thin"}
              onClick={() => handleSetOpenedTab("trial-mentees")}
            >
              <Text>
                {" "}
                <Link to="/mentees/trial/upcoming">Trial Mentees</Link>
              </Text>
            </Box>
            <Box
              padding={"4%"}
              fontWeight={"thin"}
              onClick={() => handleSetOpenedTab("ltm-mentees")}
            >
              <Text>
                {" "}
                <Link to="/mentees/ltm/active">LTM Mentees</Link>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          paddingTop={"2%"}
          onClick={() => handleSetOpenedTab("my-sessions")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M15 7V4L18 1L19 3L21 4L18 7H15ZM15 7L11 10.9999M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6"
              stroke="#0029F5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <Text paddingLeft={"4%"} fontWeight={"medium"}>
            {" "}
            <Link to="/sessions/all">My Sessions</Link>
          </Text>
        </Box>
      </Box>
      <Box padding={"5%"} paddingLeft={"0%"}>
        <Box>
          <Text fontSize={"small"} fontWeight={"thin"}>
            MENTOR RELATED
          </Text>
        </Box>
        <Box padding={"2%"} paddingTop={"5%"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            onClick={() => handleSetOpenedTab("profile-info-anchor")}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6316 6.63137C13.2356 6.23535 13.0376 6.03735 12.9634 5.80902C12.8981 5.60817 12.8981 5.39183 12.9634 5.19098C13.0376 4.96265 13.2356 4.76465 13.6316 4.36863L16.47 1.53026C15.7168 1.18962 14.8806 1 14.0002 1C10.6865 1 8.00023 3.68629 8.00023 7C8.00023 7.49104 8.05921 7.9683 8.17049 8.42509C8.28965 8.91424 8.34923 9.15882 8.33865 9.31333C8.32758 9.47509 8.30346 9.56115 8.22886 9.70511C8.1576 9.84262 8.02108 9.97914 7.74804 10.2522L1.50023 16.5C0.671799 17.3284 0.6718 18.6716 1.50023 19.5C2.32865 20.3284 3.6718 20.3284 4.50023 19.5L10.748 13.2522C11.0211 12.9791 11.1576 12.8426 11.2951 12.7714C11.4391 12.6968 11.5251 12.6727 11.6869 12.6616C11.8414 12.651 12.086 12.7106 12.5751 12.8297C13.0319 12.941 13.5092 13 14.0002 13C17.3139 13 20.0002 10.3137 20.0002 7C20.0002 6.11959 19.8106 5.28347 19.47 4.53026L16.6316 7.36863C16.2356 7.76465 16.0376 7.96265 15.8092 8.03684C15.6084 8.1021 15.3921 8.1021 15.1912 8.03684C14.9629 7.96265 14.7649 7.76465 14.3689 7.36863L13.6316 6.63137Z"
                stroke="#0029F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Text paddingLeft={"4%"} fontWeight={"medium"}>
              {" "}
              <Link to="/profile/info">Configure</Link>
            </Text>
          </Box>
          <Box
            borderLeft={"1px solid black"}
            paddingLeft={"5%"}
            marginLeft={"5%"}
            margin={"6%"}
            display={openedTab.indexOf("profile") >= 0 ? "block" : "none"}
          >
            <Box
              padding={"4%"}
              fontWeight={"thin"}
              onClick={() => handleSetOpenedTab("profile-info")}
            >
              <Text>
                <Link to="/profile/info">Personal Information</Link>
              </Text>
            </Box>
            <Box
              padding={"4%"}
              fontWeight={"thin"}
              onClick={() => handleSetOpenedTab("profile-skills")}
            >
              <Text>
                {" "}
                <Link to="/profile/skills">Add Skills</Link>
              </Text>
            </Box>
            <Box
              padding={"4%"}
              fontWeight={"thin"}
              onClick={() => handleSetOpenedTab("profile-pitch")}
            >
              <Text>
                <Link to="/profile/pitch">Program Pitch</Link>
              </Text>
            </Box>
            <Box
              padding={"4%"}
              fontWeight={"thin"}
              onClick={() => handleSetOpenedTab("profile-criteria")}
            >
              <Text>
                <Link to="/profile/criteria">Mentee Criteria</Link>
              </Text>
            </Box>
            <Box
              padding={"4%"}
              fontWeight={"thin"}
              onClick={() => handleSetOpenedTab("profile-contact")}
            >
              <Text>
                {" "}
                <Link to="/profile/contact">Contact Details</Link>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          paddingTop={"5%"}
          onClick={() => handleSetOpenedTab("my-availability")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M20.9208 12.265C20.9731 11.8507 21 11.4285 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C11.4354 21 11.8643 20.9722 12.285 20.9182M11 5V11L14.7384 12.8692M18 21V15M15 18H21"
              stroke="#0029F5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <Text paddingLeft={"4%"} fontWeight={"medium"}>
            {" "}
            <Link to="availability">My Availability</Link>
          </Text>{" "}
          ``
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          paddingTop={"5%"}
          onClick={() => handleSetOpenedTab("payment-coupons")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8.00032V4.50097C16 3.66923 16 3.25336 15.8248 2.99779C15.6717 2.7745 15.4346 2.62281 15.1678 2.5774C14.8623 2.52542 14.4847 2.69969 13.7295 3.04824L4.85901 7.14231C4.18551 7.45316 3.84875 7.60858 3.60211 7.84963C3.38406 8.06273 3.21762 8.32287 3.1155 8.61015C3 8.9351 3 9.306 3 10.0478V15.0003M16.5 14.5003H16.51M3 11.2003L3 17.8003C3 18.9204 3 19.4805 3.21799 19.9083C3.40973 20.2846 3.71569 20.5906 4.09202 20.7823C4.51984 21.0003 5.07989 21.0003 6.2 21.0003H17.8C18.9201 21.0003 19.4802 21.0003 19.908 20.7823C20.2843 20.5906 20.5903 20.2846 20.782 19.9083C21 19.4805 21 18.9204 21 17.8003V11.2003C21 10.0802 21 9.52016 20.782 9.09234C20.5903 8.71601 20.2843 8.41005 19.908 8.2183C19.4802 8.00032 18.9201 8.00032 17.8 8.00032L6.2 8.00032C5.0799 8.00032 4.51984 8.00032 4.09202 8.2183C3.7157 8.41005 3.40973 8.71601 3.21799 9.09234C3 9.52016 3 10.0802 3 11.2003ZM17 14.5003C17 14.7765 16.7761 15.0003 16.5 15.0003C16.2239 15.0003 16 14.7765 16 14.5003C16 14.2242 16.2239 14.0003 16.5 14.0003C16.7761 14.0003 17 14.2242 17 14.5003Z"
              stroke="#0029F5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <Text paddingLeft={"4%"} fontWeight={"medium"}>
            {" "}
            <Link to="/payouts">Payments & Coupons</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
