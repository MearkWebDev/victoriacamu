import srmColor from "@/assets/srm-logo-color.png";
import srmWhite from "@/assets/srm-logo-white.png";

interface CamuLogoProps {
  textColor?: "white" | "black";
  iconHeight?: string;
}

const CamuLogo = ({ textColor = "white", iconHeight = "h-[60px]" }: CamuLogoProps) => {
  return (
    <div className={`relative ${iconHeight}`} style={{ aspectRatio: "3 / 1" }}>
      <img
        src={srmWhite}
        alt="SRM Tech"
        className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-500 ${
          textColor === "white" ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={srmColor}
        alt="SRM Tech"
        className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-500 ${
          textColor === "white" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default CamuLogo;
