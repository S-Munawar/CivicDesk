import React, { createContext, ReactNode, useContext, useState } from "react";

interface Language {
  code: "en" | "hi";
  name: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  availableLanguages: Language[];
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
];

// Comprehensive translations
const translations: Record<"en" | "hi", Record<string, string>> = {
  en: {
    welcome: "CivicDesk",
    selectArea: "Select Area",
    myReports: "My Reports",
    anonymous: "Anonymous",
    submitted: "Submitted",
    inProgress: "In Progress",
    resolved: "Resolved",
    selectLanguage: "Select Language",
    search: "Search reports...",
    filter: "Filter",
    noReports: "No Reports Found",
    createReport: "Create Report",
    reportIssue: "Report an Issue",
    home: "Home",
    profile: "Profile",
    upvote: "Upvote",
    viewDetails: "View Details",
    location: "Location",
    description: "Description",
    status: "Status",
    reportedBy: "Reported by",
    timeAgo: "ago",
    justNow: "Just now",
  },
  hi: {
    welcome: "जनमार्ग",
    selectArea: "क्षेत्र चुनें",
    myReports: "मेरी रिपोर्टें",
    anonymous: "अज्ञात",
    submitted: "प्रस्तुत",
    inProgress: "प्रगति में",
    resolved: "समाधान हो गया",
    selectLanguage: "भाषा चुनें",
    search: "रिपोर्ट खोजें...",
    filter: "फ़िल्टर",
    noReports: "कोई रिपोर्ट नहीं मिली",
    createReport: "रिपोर्ट बनाएं",
    reportIssue: "समस्या की रिपोर्ट करें",
    home: "होम",
    profile: "प्रोफ़ाइल",
    upvote: "समर्थन",
    viewDetails: "विवरण देखें",
    location: "स्थान",
    description: "विवरण",
    status: "स्थिति",
    reportedBy: "द्वारा रिपोर्ट किया गया",
    timeAgo: "पहले",
    justNow: "अभी अभी",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        availableLanguages: languages,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
