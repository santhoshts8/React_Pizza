import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/Cart/CartOverview";
import Header from "./Header";
import Loader from "../UI/Loader";
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state == "loading";
  return (
    <div className="font-pizza grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-auto">
        <main className="mx-auto max-w-7xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
