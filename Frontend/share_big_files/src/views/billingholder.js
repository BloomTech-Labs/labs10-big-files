import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import Billing from "./billing";

const BillingHolder = () => {
  return (
    <div>
      <NavHeader />
      <LeftMenu />
      <Billing />
    </div>
  );
};
export default BillingHolder;
