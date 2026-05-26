import { motion } from "framer-motion";

interface LightPageHeroProps {
  label: string;
  title: string;
  description: string;
  image: string;
}

const LightPageHero = ({ label, title, description, image }: LightPageHeroProps) => {
  return (
    <section className="relative min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden">
      {/* Background image with the same overlay treatment as Career Hub hero */}
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt=""
          loading="eager"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy) / 0.6) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, hsl(var(--teal) / 0.12) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-xl"
        >
          <p className="section-label">{label}</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg leading-relaxed max-w-lg" style={{ color: "hsl(0 0% 100% / 0.8)" }}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LightPageHero;