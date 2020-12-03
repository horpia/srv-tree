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
	ip?: string[],
	localAddr?: string[],
	globalAddr?: string[]
}

export function ConnectorView(props: ConnectorViewType): JSX.Element {
	return (
		<div className={'connector connector_' + props.type}>
			<div className="connector__v-line"/>
			<div className="connector__connection">
				<div className="connector__point"/>
				<div className="connector__h-line">
					<div className="connector__caption">{props.caption || wrapArray(props.ip || [])}</div>
				</div>
				{props.globalAddr && props.globalAddr.length > 0
					?
					<>
						<div className="connector__wan-point"/>
						<div className="connector__wan-line">
							<div className="connector__wan-caption">{wrapArray(props.globalAddr || [])}</div>
						</div>
					</>
					: null
				}
				{props.localAddr && props.localAddr.length > 0
					?
					<>
						<div className="connector__lan-point"/>
						<div className="connector__lan-line">
							<div className="connector__lan-caption">{wrapArray(props.localAddr || [])}</div>
						</div>
					</>
					: null
				}
			</div>
		</div>
	);
}

function wrapArray(lines: string[]): React.ReactNode {
	return lines.map((v: string, i: number) => <div key={i.toString()}>{v}</div>);
}