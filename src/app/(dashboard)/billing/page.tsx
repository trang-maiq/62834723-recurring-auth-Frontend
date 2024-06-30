import { FC } from "react";
import { notFound } from "next/navigation";
import BillingView from "@/app/_components/ai/billing/billing-view";

const Page: FC = () => {
  const billingType = process.env.NEXT_PUBLIC_BILLING;
  if (billingType) {
    return <BillingView />;
  } else {
    return notFound();
  }
};

export default Page;
