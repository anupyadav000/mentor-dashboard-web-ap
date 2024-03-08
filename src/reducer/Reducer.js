import mentorDashboardState from "../state/State";
const mentorDashboardStateReducer = (state = mentorDashboardState, action) => {
  switch (action.type) {
    case "SET_PROFILE_STEP":
      return {
        ...state,
        profileSetupStep: action.data,
      };
    case "SET_PROFESSIONAL_DETAILS":
      const mentorData = {
        ...state.mentorData,
        professionalDetails: action.data,
      };
      return {
        ...state,
        mentorData: mentorData,
      };
    case "SET_TECHNICAL_SKILLS":
      const withTechnicalSkills = {
        ...state.skills,
        technicalSkills: action.data,
      };
      return {
        ...state,
        mentorData: withTechnicalSkills,
      };
    case "SET_MENTORSHIP_SKILLS":
      const withMentorshipSkills = {
        ...state.skills,
        mentorshipSkills: action.data,
      };
      return {
        ...state,
        mentorData: withMentorshipSkills,
      };
    case "SET_PROGRAM_PITCH":
      const withProgramPitch = {
        ...state.mentorData,
        programPitch: action.data,
      };
      return {
        ...state,
        mentorData: withProgramPitch,
      };
    case "SET_MENTEE_CRITERIA":
      const withMenteeCriteria = {
        ...state.mentorData,
        menteeCriteria: action.data,
      };
      return {
        ...state,
        mentorData: withMenteeCriteria,
      };
    case "SET_CONTACT_DETAILS":
      const withContactDetails = {
        ...state.mentorData,
        contactDetails: action.data,
      };
      return {
        ...state,
        mentorData: withContactDetails,
      };
    case "SET_MENTOR_AVAILABILITY":
      return {
        ...state,
        mentorData: action.data,
      };
    case "SET_PAYOUTS":
      const withPayouts = {
        ...state.paymentAndCoupons,
        payouts: action.data,
      };
      return {
        ...state,
        paymentAndCoupons: withPayouts,
      };
    case "SET_COUPONS":
      const withCoupons = {
        ...state.paymentAndCoupons,
        coupons: action.data,
      };
      return {
        ...state,
        paymentAndCoupons: withCoupons,
      };
    case "SET_PRICING":
      const withPricing = {
        ...state.paymentAndCoupons,
        payoutDetails: action.data,
      };
      return {
        ...state,
        paymentAndCoupons: withPricing,
      };
    case "SET_PAYOUT_DETAILS":
      const withPayoutDetails = {
        ...state.paymentAndCoupons,
        payoutDetails: action.data,
      };
      return {
        ...state,
        paymentAndCoupons: withPayoutDetails,
      };
    case "SET_MENTEE_SESSIONS":
      const withMenteeSessions = {
        ...state.paymentAndCoupons,
        payoutDetails: action.data,
      };
      return {
        ...state,
        menteeSessions: withMenteeSessions,
      };
    case "SET_MENTEES":
      const withMentees = {
        ...state.paymentAndCoupons,
        payoutDetails: action.data,
      };
      return {
        ...state,
        mentees: withMentees,
      };
    default:
      return state;
  }
};

export default mentorDashboardStateReducer;
