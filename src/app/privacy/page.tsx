import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RelaxCast",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">Effective Date: February 11, 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information Collected and Purpose of Use</h2>
          <p>
            The Service does not collect any personal information directly provided by Users. However, the Service may automatically collect
            and use certain information for the following purposes:
          </p>
          <ul className="list-disc pl-6">
            <li>Google Analytics for analyzing user activity and improving the Service</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use of Google Analytics</h2>
          <p>The Service uses “Google Analytics,” a web analytics service provided by Google.</p>
          <p>Google Analytics may use cookies to collect traffic data. Users can disable cookies by changing their browser settings.</p>
          <p>Data collected by Google is handled in accordance with Google’s privacy policy.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Advertising</h2>
          <p>
            The Service uses Google Ads to display advertisements. Cookies may be used in the process of ad delivery, and any information
            collected via these cookies is handled according to Google’s privacy policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Provision of Personal Information to Third Parties</h2>
          <p>
            Since the Service does not directly collect personal information from Users, it does not provide such information to any third
            party. However, if disclosure is required by law, the Service operator may comply with such legal requests.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
          <p>
            Data collected through this Service (including analytics and advertising) does not directly identify individual users. Unless
            Users disable cookies or take other measures, some data may be automatically collected and used for analytics or advertising
            purposes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">6. Changes to this Privacy Policy</h2>
          <p>
            The Service operator may update this Privacy Policy as necessary. Any changes will become effective upon posting on the Service
            website.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <br />
            Email:&nbsp;
            <a href="mailto:fmsknn@gmail.com" className="text-blue-300 underline">
              fmsknn@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
