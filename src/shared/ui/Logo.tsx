
// @ts-ignore
import LogoPng from "@assets/images/oau-logo.png";


type LogoProps = {
	className?: string;
};

const Logo = ({className = "w-16"}: LogoProps) => {

	return <img src={LogoPng} className={`w-16 ${className}`} alt="logo" />
};

export default Logo;
