import srmColor from "@/assets/srm-logo-color.png";
import srmWhite from "@/assets/srm-logo-white.png";

interface CamuLogoProps {
  textColor?: "white" | "black";
  iconHeight?: string;
}

// Render the logo at its EXACT original uploaded dimensions (300 x 65).
// No scaling, no max-height, no aspect-ratio overrides — same size everywhere.
const LOGO_WIDTH = 250;
const LOGO_HEIGHT = 54;

const CamuLogo = ({ textColor = "white" }: CamuLogoProps) => {
  return (
    <div
      className="relative"
      style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
    >
      <img
        src={srmWhite}
        alt="SRM Tech"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={`absolute inset-0 transition-opacity duration-500 ${
          textColor === "white" ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
      />
      <img
        src={srmColor}
        alt="SRM Tech"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={`absolute inset-0 object-contain transition-opacity duration-500 ${
          textColor === "white" ? "opacity-0" : "opacity-100"
        }`}
        style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
      />
    </div>
  );
};

export default CamuLogo;
