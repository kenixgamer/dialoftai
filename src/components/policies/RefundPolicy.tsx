import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Billing & Refunds Policy - Dialoft AI</title>
        <meta name="description" content="Billing and Refund Policy for Dialoft AI" />
      </Helmet>
      <div className="min-h-screen bg-black text-white p-8 md:p-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold mb-8">Billing & Refunds Policy</h1>
          <p className="text-gray-400 mb-8">
            At Dialoft AI, we strive to provide the best value and service for our customers. Please carefully review our billing and refund policies outlined below:
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscription Plans: We offer both monthly and annual subscription plans to access our services.</li>
              <li>Payment Terms: Payments are charged at the start of each billing cycle (monthly or annually) based on your chosen plan.</li>
              <li>Automatic Renewal: All subscriptions automatically renew at the end of the billing period unless canceled in advance.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Refunds</h2>
            <p className="text-gray-400 mb-4">
              Due to the nature of our product, we do not offer refunds—either partial or in full. This policy applies to all subscription plans, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monthly subscriptions.</li>
              <li>Annual subscriptions.</li>
            </ul>
            <p className="text-gray-400 mt-4">
              We encourage you to explore our Free Forever Plan before committing to a paid plan to ensure our product meets your needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may cancel your subscription at any time through your account settings.</li>
              <li>Once canceled, no further charges will be made to your account. However, you will retain access to the product until the end of your current billing cycle.</li>
              <li>Cancellation of an annual subscription does not qualify for a pro-rated refund for the unused portion of the year.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Pricing Changes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may revise our pricing, pricing policies, features, or access restrictions at any time.</li>
              <li>Any changes to pricing or plans will be communicated in advance, and existing customers will continue to be billed at their current rate until their subscription renews.</li>
            </ul>
          </section>
          
          <section className="mt-12">
            <p>If you have questions or concerns regarding billing, please contact our support team at support@dialoftai.com</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
