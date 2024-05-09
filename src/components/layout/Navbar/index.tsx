// "use client";
// import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import Link from "next/link";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const links = [
//   {
//     label: "Benefit",
//     href: "/",
//   },
//   {
//     label: "How it Works",
//     href: "#howitworks",
//   },
//   {
//     label: "Pricing",
//     href: "/#pricing",
//   },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);



//   return (
//     <div className="py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl">
//       <div className="relative flex items-center justify-between">
//         <Link
//           href="/"
//           aria-label="JoyfulAPI"
//           title="JoyfulAPI"
//           className="inline-flex items-center"
//         >
// 		<Image src="/logo.svg" alt="JoyfulAPI" width={24} height={24} />
//           <span className="ml-2 text-xl font-bold tracking-wide">
//             JoyfulAPI
//           </span>
//         </Link>
//         <ul className="hidden items-center gap-12 lg:flex">
//           {links.map((link, index) => (
//             <motion.li
//               key={link.label}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Link
//                 href={link.href}
//                 aria-label={link.label}
//                 title={link.label}
//                 className="tracking-wide transition-colors duration-200 hover:underline hover:text-violet-500 hover:scale-105 0.2s"
//               >
//                 {link.label}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>
//         <div className="lg:flex items-center gap-4 hidden p-3">
//           {!user ? (
//             <>
//               <Link href="/sign-in">
//               <Button variant="default">
//                Sign In
//               </Button>
// 			  </Link>
//             </>
//           ) : (
//             <>
// 			 <Link href="/dashboard">
//               <Button variant="ghost">
//                Dashboard
//               </Button>
// 			  </Link>
//               <Button variant="default" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </>
//           )}
//         </div>
//         <div className="lg:hidden">
//           <button
//             aria-label="Open Menu"
//             title="Open Menu"
//             className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
//             onClick={() => setIsMenuOpen(true)}
//           >
//             <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
//               <path
//                 fill="currentColor"
//                 d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//               />
//               <path
//                 fill="currentColor"
//                 d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//               />
//               <path
//                 fill="currentColor"
//                 d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//               />
//             </svg>
//           </button>
//           <AnimatePresence>
//             {isMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -50 }}
//                 transition={{ duration: 0.3 }}
//                 className="w-full z-50"
//               >
//                 <div className="p-5 bg-white border rounded shadow-sm">
//                   <div className="flex items-center justify-between mb-4">
//                     <div>
//                       <Link
//                         href="/"
//                         aria-label="JoyfulAPI"
//                         title="JoyfulAPI"
//                         className="inline-flex items-center"
//                       >
//                         <Image src="/logo.svg" alt="JoyfulAPI" width={24} height={24} />
//                         <span className="ml-2 text-xl font-bold tracking-wide uppercase text-slate-900 hover:text-violet-700">
//                           JoyfulAPI
//                         </span>
//                       </Link>
//                     </div>
//                     <button
//                       aria-label="Close Menu"
//                       title="Close Menu"
//                       className="p-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
//                         <path
//                           fill="currentColor"
//                           d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                   <ul className="space-y-4">
//                     {links.map((link, index) => (
//                       <motion.li
//                         key={link.label}
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{
//                           opacity: 1,
//                           y: 0,
//                           transition: {
//                             delay: index * 0.1,
//                             duration: 0.3,
//                             ease: "easeInOut",
//                           },
//                         }}
//                       >
//                         <Link
//                           href={link.href}
//                           aria-label={link.label}
//                           title={link.label}
//                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-violet-700"
//                         >
//                           {link.label}
//                         </Link>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };
import { FloatingNav } from "@/components/layout/Navbar/floating-navbar";
import { IconCurrencyDollar, IconUsersGroup, IconChartDots3, IconHeart } from "@tabler/icons-react";
import Image from "next/image";
import Logo from "../logo";
export function Navbar() {
  const navItems = [
    {
      name:
        (<Logo/>),
      link: "/",
      icon: <Image src="/logo.svg" alt="JoyfulAPI" width={24} height={24} />,
    },
    {
      name: "Benefits",
      link: "/#benefits",
      icon: <IconHeart className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Pricing",
      link: "/#pricing",
      icon: (
        <IconCurrencyDollar className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "How It Works",
      link: "/#howitworks",
      icon: (
        <IconChartDots3 className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default Navbar;
