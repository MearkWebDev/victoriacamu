import srmColor from "@/assets/srm-logo-color.png";
import srmWhite from "@/assets/srm-logo-white.png";

interface CamuLogoProps {
  textColor?: "white" | "black";
  iconHeight?: string;
}

// White logo stays at its current size.
const WHITE_LOGO_WIDTH = 200;
const WHITE_LOGO_HEIGHT = 43;

// Colored logo — increased dimensions.
const COLOR_LOGO_WIDTH = 240;
const COLOR_LOGO_HEIGHT = 52;

const CamuLogo = ({ textColor = "white" }: CamuLogoProps) => {
  return (
    <div className="relative" style={{ width: COLOR_LOGO_WIDTH, height: COLOR_LOGO_HEIGHT }}>
      <img
        src={srmWhite}
        alt="SRM Tech"
        width={WHITE_LOGO_WIDTH}
        height={WHITE_LOGO_HEIGHT}
        className={`absolute inset-0 object-contain transition-opacity duration-500 ${
          textColor === "white" ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: WHITE_LOGO_WIDTH, height: WHITE_LOGO_HEIGHT }}
      />
      <img
        src={srmColor}
        alt="SRM Tech"
        width={COLOR_LOGO_WIDTH}
        height={COLOR_LOGO_HEIGHT}
        className={`absolute inset-0 object-contain transition-opacity duration-500 ${
          textColor === "white" ? "opacity-0" : "opacity-100"
        }`}
        style={{ width: COLOR_LOGO_WIDTH, height: COLOR_LOGO_HEIGHT }}
      />
    </div>
  );
};

export default CamuLogo;
