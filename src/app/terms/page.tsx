import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | RelaxCast",
};
export default function TermsOfUse() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="mb-4">Last Updated: February 11, 2025</p>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Scope</h2>
          <p>
            These Terms of Use (hereinafter referred to as “Terms”) apply to all users (hereinafter referred to as “Users”) of RelaxCast
            (hereinafter referred to as “the Service”). By using the Service, Users agree to be bound by these Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Description of the Service</h2>
          <p>The Service provides internet radio streaming, and Users may use it within the scope defined in these Terms.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Prohibited Activities</h2>
          <ul className="list-disc pl-6">
            <li>Activities that violate laws or public order and morals</li>
            <li>Activities that interfere with the operation of the Service</li>
            <li>Activities that cause disadvantage or damage to the Service or third parties</li>
            <li>Other activities deemed inappropriate by the Service operator</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Advertisements</h2>
          <p>
            The Service uses third-party advertising services, including Google Ads. The Service operator assumes no responsibility for the
            content or display of such advertisements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
          <ul className="list-disc pl-6">
            <li>The Service operator shall not be liable for any damages arising from the use or inability to use the Service.</li>
            <li>
              The Service may, without prior notice, change, suspend, or terminate any part of its content. The Service operator shall not
              be liable for any damages resulting therefrom.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">6. Amendment of the Terms</h2>
          <p>
            The Service operator may revise these Terms when necessary. Any revisions shall become effective upon posting the updated Terms
            on the Service website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            If you have any questions about this Terms of Use, please contact us at: <br />
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
