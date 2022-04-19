import "bootstrap/dist/css/bootstrap.min.css";
import {  React } from "react";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from "./pages/Home";
import { Draws } from "./pages/Draws";
import { Teams } from "./pages/Teams";
import { Results } from "./pages/Results";
import { Programmes } from "./pages/Programmes";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/draws" element={<Draws />} />
        <Route path="/results" element={<Results />} />
        <Route path="/programme" element={<Programmes />} />
      </Routes>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
