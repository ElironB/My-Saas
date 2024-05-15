import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0D121F] px-[100px] bg-dot-white/[0.1]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p>Last Updated: 04/08/2024</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Information Collection and Use</h2>
        <p>We collect and use the following types of information for order processing purposes:</p>
        <ul className="list-disc pl-8">
          <li>Email address</li>
          <li>Payment information</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Data Collection Methods</h2>
        <p>We may use web cookies to collect non-personal information about users&apos; interactions with the Service.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Data Sharing</h2>
        <p>We do not share any user data with third parties.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Children&apos;s Privacy</h2>
        <p className=" w-3/4">We do not knowingly collect any personal information from children under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Updates to the Privacy Policy</h2>
        <p>Users will be notified of any updates to this Privacy Policy via email.</p>

        <p className="mt-8">For any questions or concerns regarding this Privacy Policy, please contact us at eliron2608@gmail.com.</p>

        <p className="mt-4">Thank you for using Octic!</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
