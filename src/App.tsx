import React from "react";
import Home from "./pages/home/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
