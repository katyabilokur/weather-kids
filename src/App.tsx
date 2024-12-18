import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import DressUp from "./pages/DressUp";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { SelectionProvider } from "./features/selection/SelectionContext";
import Login from "./pages/Login";
import Ping from "./pages/Ping";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectionProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              {/* <Route index element={<Navigate replace to="home" />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="start" element={<Start />} />
              <Route path="dressup" element={<DressUp />} />
              <Route path="signin" element={<Login />} />
              <Route path="ping" element={<Ping />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          // containerStyle={{ marging: "8px" }}
          containerStyle={{
            margin: "10px",
            top: 100,
            left: 8,
            bottom: 8,
            right: 8,
          }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px, 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </SelectionProvider>
    </QueryClientProvider>
  );
}

export default App;
