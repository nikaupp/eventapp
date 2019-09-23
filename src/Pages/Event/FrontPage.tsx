import React, { FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { IEvent } from '../../MockData/MockEvents';
import { StatCard } from '../Dashboard/StatusCard';
import { CardWrapper } from '../MyCollection/MyCollection';
import { EventTagType, EventTag } from '../../MockData/EventTags';
import { BadgeTag } from '../Dashboard/BadgeTag';

export const FrontPage: FC<{ event?: IEvent }> = ({ event }) => {
	return (
		<>
			<CardWrapper>
				<Heading
					text={event ? `${event.name}` : ''}
					ingress={event && event.description}
					isUnderlined
				></Heading>
				<div>{event && event.tags && renderTags(event.tags)}</div>
			</CardWrapper>

			<div className="row">
				<div className="col-lg-4">
					<StatCard
						value={'12 930, 90 €'}
						icon={<span style={{ color: 'lightgreen' }}>{Icons.dollar}</span>}
						text="Tulot"
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'10013'}
						icon={<span style={{ color: 'lightsalmon' }}>{Icons.users}</span>}
						text="Ilmoittautuneita"
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'428'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>}
						text="Avattuja viestejä"
					></StatCard>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<StatCard
						value={'930, 90 €'}
						icon={<span style={{ color: '#d25151' }}>{Icons.dollar}</span>}
						text="Menot"
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'10013'}
						icon={<span style={{ color: 'lightsalmon' }}>{Icons.users}</span>}
						text="Kutsuttuja"
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'796'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>}
						text="Kutsuttuja"
					></StatCard>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<StatCard
						value={'2 405, 00 €'}
						icon={<span style={{ color: 'lightblue' }}>{Icons.dollar}</span>}
						text="Saatavat"
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'10013'}
						icon={<span style={{ color: 'lightsalmon' }}>{Icons.users}</span>}
						text="Ilmoittautuneita"
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'796'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>}
						text="Lähetettyjä"
					></StatCard>
				</div>
			</div>
		</>
	);
};

const renderTags = (tags: EventTagType[]) =>
	tags.map((tag) => {
		const current = EventTag[tag];
		return current ? (
			<BadgeTag
				name={current.name}
				icon={current.icon}
				description={current.description}
			/>
		) : (
			new Error(`Uknown Event Tag Type: ${tag}`)
		);
	});