import React from "react";
import "./style.scss";

export enum ConnectionType {
	LAN = 'lan',
	WAN = 'wan',
	VM = 'vm',
	ROOT_SERVICE = 'root-service',
	SERVICE = 'service',
}

type ConnectorViewType = {
	type: ConnectionType,
	caption?: string,
	domain?: string,
	localDomain?: string
}

export function ConnectorView(props: ConnectorViewType): JSX.Element {
	return (
		<div className={'connector connector_' + props.type}>
			<div className="connector__v-line"/>
			<div className="connector__connection">
				<div className="connector__point"/>
				<div className="connector__h-line">
					<div className="connector__caption">{props.caption || ''}</div>
				</div>
				{props.domain
					?
					<>
						<div className="connector__wan-point"/>
						<div className="connector__wan-line">
							<div className="connector__wan-caption">{splitByComma(props.domain)}</div>
						</div>
					</>
					: null
				}
				{props.localDomain
					?
					<>
						<div className="connector__lan-point"/>
						<div className="connector__lan-line">
							<div className="connector__lan-caption">{splitByComma(props.localDomain)}</div>
						</div>
					</>
					: null
				}
			</div>
		</div>
	);
}

function splitByComma(str: string): React.ReactNode {
	return str.split(',').map((v: string, i: number) => <div key={i.toString()}>{v}</div>);
}