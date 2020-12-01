import icons from "./icons.svg";
import elasticSearchIcon from "./elasticsearch.svg";
import apacheIcon from "./apache.svg";
import mssqlIcon from "./mssql.svg";
import db2Icon from "./db2.svg";
import "./style.scss";

const supportedIcons: string[] = [
	// Internal icons
	'server', 'vm', 'data-center', 'service', 'arrow', 'info', 'cancel',

	// Logo of services
	'php', 'php-fpm', 'nginx', 'redis', 'mysql', 'cassandra',
	'rabbitmq', 'sphinxsearch', 'elasticsearch', 'clickhouse',
	'docker', 'nodejs', 'kafka', 'cron', 'crontab', 'storage',
	'postgresql', 'mariadb', 'oracle', 'mongodb', 'apache', 'mssql',
	'db2', 'jenkins', 'consul', 'kibana', 'zabbix', 'ansible', 'graylog'
];


const imgFiles: Record<string, string> = {
	'elasticsearch': elasticSearchIcon,
	'apache': apacheIcon,
	'mssql': mssqlIcon,
	'db2': db2Icon,
};

export function SvgIcon(props: {name: string, className?: string}): JSX.Element {
	let name: string = props.name.toLowerCase();
	let className: string = props.className || '';

	if (!supportedIcons.includes(name)) {
		name = 'service';
	}

	if (typeof imgFiles[name] === 'string') {
		return (
			<img src={imgFiles[name]} alt="" className={'icon ' + className}/>
		);
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg"
		     xmlnsXlink="http://www.w3.org/1999/xlink"
		     className={'icon ' + className}>
			<use href={`${icons}#${name}`}/>
		</svg>
	);
}