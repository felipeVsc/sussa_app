import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { MainRouter } from './presentation/routes';
import './assets/styles/reset.css';
import { AuthenticationProvider } from './presentation/context/authentication';
import { ToastContainer } from 'react-toastify';
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,CategoryScale, LinearScale, BarController, BarElement} from "chart.js";

import 'react-toastify/dist/ReactToastify.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarController, BarElement);

function App() {
  return (
    <AuthenticationProvider>
      <RouterProvider router={MainRouter} />
      <ToastContainer />
    </AuthenticationProvider>
  );
}

export default App;
