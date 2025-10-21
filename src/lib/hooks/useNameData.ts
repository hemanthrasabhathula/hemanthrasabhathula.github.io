import { PROFILE } from "../constants/constants";

export const useNameData = () => {
  const typedStrings = [
    "Developer",
    "Techie",
    "Cyber geek",
    "UI Designer",
    "AI Fanatic",
    "Futurist",
  ];

  return {
    typedStrings,
    firstName: PROFILE.FIRST_NAME,
    lastName: PROFILE.LAST_NAME,
  };
};
