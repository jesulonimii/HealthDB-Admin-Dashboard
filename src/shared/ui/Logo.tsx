
// @ts-ignore
import {ReactComponent as LogoSvg} from "@assets/images/logo.svg";

type LogoProps = {
	className?: string;
};

const Logo = ({className = "w-24"}: LogoProps) => {

	return <LogoSvg className={className} />
};

export default Logo;
