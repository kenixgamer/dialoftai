import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Dialoft AI</title>
        <meta name="description" content="Privacy Policy for Dialoft AI" />
      </Helmet>
      <div className="min-h-screen bg-black text-white p-8 md:p-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy - Dialoft AI</h1>
          <p className="text-gray-400 mb-4">Last Updated: January 2, 2025</p>
          
          {/* Introduction */}
          <section className="mb-8">
            <p className="mb-4">
              This Statement of Privacy applies to Dialoft AI and Dialoft AI Inc., and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Dialoft AI include www.dialoftai.com and Dialoft AI. The Dialoft AI application is an AI-powered telecalling application. By using the Dialoft AI application, you consent to the data practices described in this statement.
            </p>
          </section>

          {/* Collection of Personal Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Collection of Your Personal Information</h2>
            <p className="mb-4">
              We collect several different types of data for various purposes, primarily to provide and improve our Services. These data include:
            </p>

            {/* Personal Data Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">1. Personal Data</h3>
              <p className="mb-4">
                To better provide you with products and services, Dialoft AI may ask you to provide certain personally identifiable information ("Personal Data") that can be used to contact or identify you. These may include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
              {/* ... continue with rest of sections */}
            </div>

            {/* Continue with all other sections following the same pattern */}
          </section>

          <section className="mt-12">
            <p>For questions or concerns, contact us at support@dialoftai.com</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
