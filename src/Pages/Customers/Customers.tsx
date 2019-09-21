import React, { useState } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/routes';
import { CardWrapper } from '../MyCollection/MyCollection';
import { useCustomers } from '../../Queries/useCustomers';
import styled from '../../Theme/theme';
import { Icons } from 'library';
import { ICustomer } from '../../MockData/MockCustomers';

export const Customers = () => {
	const { customers } = useCustomers();
	const [filter, setFilter] = useState('');

	const createFilter = (customers: ICustomer[]) => {
		const filt = filter.toLowerCase();

		return customers.filter((cust) => {
			return filt
				? cust.firstname.toLowerCase().indexOf(filt) > -1 ||
						cust.lastname.toLowerCase().indexOf(filt) > -1 ||
						cust.city.toLowerCase().indexOf(filt) > -1 ||
						cust.email.toLowerCase().indexOf(filt) > -1
				: true;
		});
	};

	return (
		<CardWrapper>
			<Heading
				headingText="Asiakkaat"
				ingress="Valitse käsiteltävä asiakaskortti"
			></Heading>

			<FilterInput
				type="text"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			></FilterInput>

			{createFilter(customers).map((customer) => (
				<div key={customer.id}>
					<CustomerItem to={`${routes.customer.path}/${customer.id}`}>
						<span className="customer__icon">{Icons.user}</span>
						<span className="customer__name">{`${customer.firstname} ${customer.lastname}`}</span>
						<span className="customer__email">{`${customer.email}`}</span>
						<span className="customer__city">{`${customer.city}`}</span>
					</CustomerItem>
				</div>
			))}
		</CardWrapper>
	);
};

const FilterInput = styled.input`
	display: block;
	width: 100%;
	max-width: 20rem;
	border: 1px solid lightgray;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 0.2rem;
`;

const CustomerItem = styled(Link)`
	display: flex;
	justify-content: space-between;
	color: ${(p) => p.theme.primary_color};
	align-items: center;
	border: none;
	padding: 0.4rem 0;
	cursor: pointer;
	font-size: 0.85rem;
	width: 100%;
	background: none;
	text-align: left;
	text-decoration: none;

	&:hover {
		color: ${(p) => p.theme.secondary_color};
		background: #ccc;
	}

	& + & {
		border-top: 4px solid #ccc;
	}

	&:focus {
		border: none;
		box-shadow: 0 0 0 2px ${(p) => p.theme.primary_color};
	}

	.customer__icon {
		flex: 0 0 22px;
		height: 22px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: grey;
		border-radius: 100%;
		color: #fff;
	}
	.customer__name {
		flex: 1 1 auto;
		padding-left: 1rem;
		color: ${(p) => p.theme.text_color};
	}
	.customer__email {
		flex: 0 0 35%;
		padding-left: 1rem;
		text-align: left;
	}
	.customer__city {
		flex: 0 0 20%;
		padding-left: 1rem;
	}

	.stamp {
		flex: 0 0 110px;
		text-align: right;
		color: gray;
		font-size: 0.8rem;
	}
`;