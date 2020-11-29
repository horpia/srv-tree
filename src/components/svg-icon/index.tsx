import icons from "./icons.svg";
import elasticSearch from "./elasticsearch.svg";
import "./style.scss";

const supportedIcons: string[] = [
	// Internal icons
	'server', 'vm', 'data-center', 'service', 'arrow', 'info', 'cancel',

	// Logo of services
	'php', 'php-fpm', 'nginx', 'redis', 'mysql', 'cassandra',
	'rabbitmq', 'sphinxsearch', 'elasticsearch', 'clickhouse',
	'docker', 'nodejs', 'kafka', 'crontab', 'storage'
];

export function SvgIcon(props: {name: string, className?: string}): JSX.Element {
	let name: string = props.name.toLowerCase();

	if (!supportedIcons.includes(name)) {
		name = 'service';
	}

	if (name === 'elasticsearch') {
		return (
			<img src={elasticSearch} alt="" className={'icon ' + (props.className || '')}/>
		);
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg"
		     xmlnsXlink="http://www.w3.org/1999/xlink"
		     className={'icon ' + (props.className || '')}>
			<use href={`${icons}#${name}`}/>
		</svg>
	);
}