import srmWhite from "@/assets/srm-logo-white.png";
import srmColor from "@/assets/srmtech-colored-logo.png";

interface CamuLogoProps {
  textColor?: "white" | "black";
  iconHeight?: string;
}

// Colored logo matches the white logo dimensions exactly.
const WHITE_LOGO_WIDTH = 200;
const WHITE_LOGO_HEIGHT = 43;
const COLOR_LOGO_WIDTH = WHITE_LOGO_WIDTH;
const COLOR_LOGO_HEIGHT = WHITE_LOGO_HEIGHT;

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
