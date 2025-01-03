import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Dialoft AI</title>
        <meta name="description" content="Terms of Service for Dialoft AI" />
      </Helmet>
      <div className="min-h-screen bg-black text-white p-8 md:p-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold mb-8">Terms of Service - Dialoft AI</h1>
          <p className="text-gray-400 mb-4">Last Updated: January 2, 2025</p>

          <p className="mb-6">
            This Agreement is between Dialoft AI Inc. (Owner of Dialoft AI) and the person (natural or legal) accessing or using the Product. These Terms of Service ("Terms") constitute an agreement between Dialoft AI Inc. ("Dialoft AI," "we," "us") and you, governing your use of the Site and services (as defined below) offered by Dialoft AI. By signing up, accessing, or using the Product, you acknowledge your acceptance of this Agreement and consent to be bound by its terms and conditions.
          </p>
          <p className="mb-6">
            If you are accessing or using the Product on behalf of your company, you certify that you have the authority to accept this Agreement on behalf of your firm. Do not use the Site if you do not agree to these Terms or if your jurisdiction does not honor them. Persons under the age of 13 are not authorized to use the Site.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Overview of Services</h2>
            <p className="mb-4">Dialoft AI is a SaaS platform providing AI-driven telecalling solutions. These services include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Outbound Calling Services: Automated AI-powered outbound calls for various purposes, such as customer engagement, reminders, and lead generation.</li>
              <li>Inbound Calling Services: AI-powered virtual agents to handle incoming calls and queries.</li>
              <li>Custom Call Handling: Integration options for advanced workflows, such as customer support and telemarketing campaigns.</li>
              <li>Dashboard: A user-friendly dashboard for campaign management, analytics, and customization.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Fees and Payment Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">2.1 Cloud Service Fees</h3>
                <p>The pricing for Dialoft AI services is available on the official pricing page. Users will be billed based on the plan selected during account setup and the actual usage within each subscription period.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2.2 Payment Terms</h3>
                <p>If an automatic payment method fails, Dialoft AI will issue an invoice due within 14 days. A 7-day grace period will follow if the invoice remains unpaid. Failure to pay within the grace period may result in service suspension until payment is received. Persistent non-payment may lead to termination of services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2.3 Price Adjustments</h3>
                <p>Dialoft AI reserves the right to adjust pricing by providing at least seven (7) days' notice via email or the platform. New pricing will take effect at the start of the next subscription period.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Key Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customer: The individual or company accessing or using the Product.</li>
              <li>Effective Date: The date the Customer first accepts this Agreement.</li>
              <li>Invoice Period: Monthly.</li>
              <li>Payment Period: One day from the date of invoice.</li>
              <li>Provider: Dialoft AI Inc.</li>
              <li>Subscription Start Date: Date of account creation.</li>
              <li>Subscription Period: Depend on which pricing plan you select.</li>
              <li>Non-Renewal Notice Period: A minimum of 30 days before the current subscription period ends.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
            <div className="space-y-6">
              {/* Add subsections 4.1-4.5 here */}
              <div>
                <h3 className="text-xl font-semibold mb-2">4.1 General Use</h3>
                <p className="mb-4">Dialoft AI's Acceptable Use Policy aims to prevent misuse, ensure compliance with applicable laws, and protect the integrity of its systems and services. Any action that disrupts these systems or violates laws is strictly prohibited.</p>
                <p>Users agree not to use the services for activities that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Violate any laws or regulations.</li>
                  <li>Infringe on intellectual property or the rights of others.</li>
                  <li>Harass, defame, or abuse any individual or entity.</li>
                  <li>Impersonate others or engage in deceptive practices.</li>
                </ul>
              </div>
              {/* Add remaining subsections */}
            </div>
          </section>

          {/* Add sections 5-9 following the same pattern */}
          
          <section className="mt-12 border-t pt-8 text-gray-400">
            <p>For any questions or concerns regarding these Terms, please contact us at support@dialoftai.com</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
