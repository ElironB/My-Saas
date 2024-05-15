import Image from "next/image";
import { DialogDemo } from "../contact";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="pt-[30px] max-w-full rounded-t-lg border-t-2 border-gray-600 bg-slate-800"
      initial={{ opacity: 0,  y: 50 }}
      whileInView={{ opacity: 1,  y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <div className="flex items-center">
                <Image
                  src="/opcticlogo.png"
                  alt="Octic"
                  width={100}
                  height={100}
                  className=" translate-x-6  translate-y-2"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <span className="ml-2 text-8xl font-bold tracking-wide -translate-x-10">
                    ctic
                  </span>
                </span>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#pricing" className="hover:underline ">
                    Pricing
                  </a>
                </li>
                <li>
                  <DialogDemo element="a" />
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/tos" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Octic™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
