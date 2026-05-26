import { motion } from "framer-motion";

interface LightPageHeroProps {
  label: string;
  title: string;
  description: string;
  image: string;
}

const LightPageHero = ({ label, title, description, image }: LightPageHeroProps) => {
  return (
    <section className="relative min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100">
      {/* Right-aligned image */}
      <motion.img
        src={image}
        alt=""
        loading="eager"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover object-right"
      />
      {/* Left fade for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 md:via-white/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-xl"
        >
          <p className="section-label">{label}</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.06] tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LightPageHero;