import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    image: string;
    background?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-10 relative h-full w-full",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.span key={idx} initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        viewport={{ once: true }} className="relative group  block p-2 h-full w-full ">
          <Card>
            <div className="w-[144px] h-[144px]">
              { item.background && <Image
                src={item.background}
                alt="Background"
                width={200}
                height={200}
                className="max-w-full mx-auto absolute -z-10 -translate-x-5 -translate-y-14"
              />}
              <video
                autoPlay
                loop
                muted
                playsInline={true}
                className="object-cover"
                width={144}
                height={144}
              >
                <source src={item.image} type="video/mp4" />
              </video>
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full p-3 overflow-hidden w-full space-x-5 bg-trasperent dark:border-white/[0.2]  group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 flex">
        <div className="p-3 flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-100 font-bold  text-2xl text-center tracking-wide mt-7",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 mb-0 text-zinc-400 tracking-wide text-md  text-center leading-relaxed w-[85%]",
        className
      )}
    >
      {children}
    </p>
  );
};
