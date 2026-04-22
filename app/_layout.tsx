import { Stack } from "expo-router";
import { CommunityReportsProvider } from "../context/CommunityReportsContext";
import { ReportsProvider } from "../context/ReportsContext";
import { LanguageProvider } from "../context/LanguageContext";

if (typeof setImmediate === 'undefined') {
  //@ts-ignore
  global.setImmediate = (fn: any, ...args: any[]) => setTimeout(fn, 0, ...args);
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <ReportsProvider>
        <CommunityReportsProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </CommunityReportsProvider>
      </ReportsProvider>
    </LanguageProvider>
  );
}
