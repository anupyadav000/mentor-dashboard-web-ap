import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ProfileInfo from "./components/profile/ProfileInfo";
import ProfileSkills from "./components/profile/ProfileSkills";
import ProfilePitch from "./components/profile/ProfilePitch";
import ProfileMentee from "./components/profile/ProfileMentee";
import ProfileContact from "./components/profile/ProfileContact";
import AllSessions from "./components/sessions/AllSessions";
import LtmSessions from "./components/sessions/LtmSessions";
import TrialSessions from "./components/sessions/TrialSessions";
import Home from "./components/Home";
import UpcomingMentees from "./components/mentees/trial/UpcomingMentees";
import PastMentees from "./components/mentees/trial/PastMentees";
import ActiveMentees from "./components/mentees/ltm/ActiveMentees";
import PausedMentees from "./components/mentees/ltm/PausedMentees";
import Payouts from "./components/paymentcoupons/Payouts";
import Pricing from "./components/paymentcoupons/Pricing";
import Discount from "./components/paymentcoupons/Discount";
import PaymentSummary from "./components/paymentcoupons/PaymentSummary";
import CancelledMentees from "./components/mentees/trial/CancelledMentees";
import MyAvailability from "./components/availability/MyAvailability";

function App() {
  return (
    <Box>
      <Box>
        <Header></Header>
      </Box>
      <Box paddingLeft={"10%"} paddingRight={"10%"}>
        <BrowserRouter>
          <Box display={"flex"} flexDirection={"row"}>
            <Box maxWidth={"30%"} minWidth={"25%"}>
              <Navbar></Navbar>
            </Box>
            <Box>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="profile/info" element={<ProfileInfo />} />
                <Route path="profile/skills" element={<ProfileSkills />} />
                <Route path="profile/pitch" element={<ProfilePitch />} />
                <Route path="profile/mentee" element={<ProfileMentee />} />
                <Route path="profile/contact" element={<ProfileContact />} />
                <Route path="sessions/all" element={<AllSessions />} />
                <Route path="sessions/ltm" element={<LtmSessions />} />
                <Route path="sessions/trial" element={<TrialSessions />} />
                <Route
                  path="mentees/trial/upcoming"
                  element={<UpcomingMentees />}
                />
                <Route path="mentees/trial/past" element={<PastMentees />} />
                <Route
                  path="mentees/trial/cancelled"
                  element={<CancelledMentees />}
                />
                <Route path="mentees/ltm/active" element={<ActiveMentees />} />
                <Route path="mentees/ltm/paused" element={<PausedMentees />} />
                <Route path="mentees/ltm/past" element={<PastMentees />} />
                <Route path="*" element={<PastMentees />} />
                <Route path="my/availability" element={<MyAvailability />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="payouts" element={<Payouts />} />
                <Route path="discount" element={<Discount />} />
                <Route path="payment/summary" element={<PaymentSummary />} />
              </Routes>
            </Box>
            <Box>
              <Outlet></Outlet>
            </Box>
          </Box>
        </BrowserRouter>
      </Box>
    </Box>
  );
}

export default App;
