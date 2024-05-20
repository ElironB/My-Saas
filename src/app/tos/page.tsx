import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 bg-dot-white/[0.3] w-[90vw] md:w-[80w] lg:w-[75vw] mx-auto">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
        <p>Last Updated: 04/08/2024</p>

        <p className="mt-8">Welcome to Octic!</p>

        <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Access to the Service</h2>
        <p>- Access to Octic&apos;s software is granted to the user upon a one-time payment, providing unlimited access to the product.</p>
        <p>- Users have the option to request a full refund within 7 days of purchase.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. User Data</h2>
        <p>- Octic collects user email and payment information solely for the purpose of providing the Service.</p>
        <p>- For more information on how we collect, use, and disclose personal information, please refer to our Privacy Policy.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Non-personal Data</h2>
        <p>- We may use web cookies to collect non-personal information about users&apos; interactions with the Service.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Governing Law</h2>
        <p>- These Terms shall be governed and construed in accordance with the laws of United Kingdom, without regard to its conflict of law provisions.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Updates to Terms</h2>
        <p>- Users will be notified of any updates to these Terms via email.</p>

        <p className="mt-8">For any questions or concerns regarding these Terms, please contact us at Eli@octic.dev .</p>

        <p className="mt-4">Thank you for using Octic!</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
