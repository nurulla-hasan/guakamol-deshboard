"use client"
import PrivateRoute from '@/components/privet-route/PrivetRoute';
import './globals.css';
import store from "@/redux/store";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className='container mx-auto max-w-full'>
        <Provider store={store}>
          {/* <PrivateRoute> */}
            <NextTopLoader
              color="#00B047"
              height={2}
              showSpinner={false}
            />
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            {children}
          {/* </PrivateRoute> */}
        </Provider>
      </body>
    </html >
  );
}