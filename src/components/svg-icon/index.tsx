import icons from "./icons.svg";
import elasticSearch from "./elasticsearch.svg";
import "./style.scss";

export function SvgIcon(props: {name: string, className?: string}): JSX.Element {
	if (props.name === 'elasticsearch') {
		return (
			<img src={elasticSearch} alt="" className={'icon ' + (props.className || '')}/>
		);
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg"
		     xmlnsXlink="http://www.w3.org/1999/xlink"
		     className={'icon ' + (props.className || '')}>
			<use href={`${icons}#${props.name}`}/>
		</svg>
	);
}