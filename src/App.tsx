import { RouterProvider } from "react-router-dom";

import router from "./lib/router";
import ThemeProvider from "./components/MainLayout/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import { AuthProvider } from "./providers/AuthProvider";
import { useEffect } from "react";
import DBIndexed from "./config/indexedDB";
import drugJson from "./Drugdata ilove.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const fn = async () => {
      await DBIndexed.populate(drugJson);
    };
    fn();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider defaultOpen={false}>
        <AuthProvider>
          <ThemeProvider
            defaultTheme='dark'
            storageKey='vite-ui-theme'>
            <RouterProvider router={router} />
          </ThemeProvider>
        </AuthProvider>
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default App;
