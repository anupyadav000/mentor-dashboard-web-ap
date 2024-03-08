const mentorDashboardState = {
  profileSetupStep: 5,
  mentorData: {
    professionalDetails: {
      name: "Anup Yadav",
      profilePic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2FAnup%20Yadav0.6202994618214566?alt=media&token=a86c347c-9aaf-4a78-a247-f239ed488280",
      bio: "I am a full stack engineer with 1 year of experience in this domain . I love guiding , helping, or mentoring others to grow in their careers.  I am currently looking forward to meeting with some exciting folks to help them grow in their careers. ",
      linkedIn: "https://www.linkedin.com/in/anup-yadav-92174b19a/",
      expertise: "Fullstack Developer",
      startedWorking: "2022",
      education: "Indian Institute of Technology, Delhi",
      experiences: [
        {
          companyName: "Razorpay",
          position: "Software Developer Engineer",
          startDate: "2022",
          endDate: "2022",
          companyPic: "https://logo.clearbit.com/Razorpay.com",
        },
        {
          companyName: "Razorpay",
          position: "Software Engineer Intern",
          startDate: "2022",
          endDate: "2022",
          companyPic:
            "https://ui-avatars.com/api/?name=Grow%20Simplee&length=1",
        },
      ],
    },
    skills: {
      technicalSkills: [
        { name: "React", description: "React is a library" },
        { name: "Javascript", description: "Javascript is a language" },
        { name: "Node", description: "Node is a runtime" },
        { name: "Express", description: "Express is a framework" },
        { name: "MongoDB", description: "MongoDB is a database" },
        { name: "Python", description: "Python is a language" },
        { name: "C++", description: "C++ is a language" },
        { name: "C", description: "C is a language" },
        { name: "Java", description: "Java is a language" },
        { name: "HTML", description: "HTML is a language" },
        { name: "CSS", description: "CSS is a language" },
        { name: "SASS", description: "SASS is a language" },
        { name: "Bootstrap", description: "Bootstrap is a framework" },
        { name: "Material UI", description: "Material UI is a framework" },
        { name: "Git", description: "Git is a version control system" },
      ],
      mentorshipSkills: [
        { name: "Mentoring", description: "Mentoring is a skill" },
      ],
    },
    programPitch: {
      teaching: true,
      handsOn: true,
      referWays: [true, true, false],
      sessionFrequency: 3,
      followUpFrequency: 3,
      adhocCalls: true,
      longTermPitch:
        "There's only one goal I'll have in mind when we prepare together. That is to get you into your dream role. I'll keep a check on your emotional and mental well-being as well. Post you get the offer, I will also help you to negotiate your salary and make sure you thrive in your new role",
    },
    menteeCriteria: {
      menteePersona: [true, true, true, true],
      menteeLimit: 5,
      menteeAspirations: [true, true, true, true, false],
      menteeExpectations: "willing to learn and accept challenges",
      trialCallEnabled: true,
    },
    contactDetails: {
      email: "anupyadav20177@gmail.com",
      phoneCountryCode: "91",
      phoneNumber: "9306098399",
      currentLocation: "South Delhi",
      currentCity: "Delhi",
      currentCountry: "India",
    },
  },
  mentorAvailability: {
    available: [
      { startTime: "18.00", endTime: "23.00" },
      { startTime: "18.00", endTime: "23.00" },
      { startTime: "18.00", endTime: "23.00" },
      { startTime: "18.00", endTime: "23.00" },
      { startTime: "18.00", endTime: "23.00" },
      { startTime: "12.00", endTime: "23.00" },
      { startTime: "12.00", endTime: "23.00" },
    ],
    unavailable: ["2021-09-30", "2021-10-01", "2021-10-02"],
  },
  paymentAndCoupons: {
    payouts: [
      {
        menteeName: "Anurag Vemula",
        payoutMonth: 1,
        totalMonth: 1,
        menteePic:
          "https://lh3.googleusercontent.com/a/AGNmyxYPNHuCSw9t6MZRYHxs-mdTGfArDMuNfZdYASCA=s96-c",
        payoutDate: "2021-09-30",
        status: "paid",
        amount: 1000,
      },
      {
        menteeName: "Shubham Pal",
        payoutMonth: 1,
        totalMonth: 1,
        menteePic:
          "https://lh3.googleusercontent.com/a/AGNmyxYPNHuCSw9t6MZRYHxs-mdTGfArDMuNfZdYASCA=s96-c",
        payoutDate: "2021-09-30",
        status: "paid",
        amount: 1000,
      },
    ],
    coupons: [
      {
        code: "2212",
        discount: 10,
        usageLimit: 10,
        expiryDate: "2021-09-30",
        showOnCheckout: true,
        appliesOn: [true, true, true, true, true, true],
      },
    ],
    pricing: {
      basePerMonthPrice: 1000,
      discountTwoMonths: 10,
      discountThreeMonths: 20,
      discountRestMonths: 30,
    },
    payoutDetails: {
      methodType: "bank",
      bankDetails: {
        accountNumber: "1234567890",
        ifscCode: "SBIN0000001",
      },
      upiDetails: {
        upiId: "anupyadav20177@oksbi",
      },
    },
  },
  mentorSessions: {
    allSessions: [],
    ltmSessions: [],
    trialSessions: [],
  },
  mentees: {
    trialMentees: [
      {
        upcomingMentees: [],
        pastMentees: [],
        cancelledMentees: [],
      },
    ],
    ltmMentees: [
      {
        activeMentees: [],
        pausedMentees: [],
        pastMentees: [],
      },
    ],
  },
};

export default mentorDashboardState;
