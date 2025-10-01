// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById("root")!).render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import App from "./App";
import "./index.css";
import StripeWrapper from "./components/sections/StripeWrapper";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY!);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StripeWrapper>
      <App />
    </StripeWrapper>
  </React.StrictMode>
);
