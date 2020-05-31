import React from 'react';
import Layout from '../components/layout';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import Component4 from '../components/Component4';
import Component5 from '../components/Component5';
import Component6 from '../components/Component6';
import Component7 from '../components/Component7';
import { css } from '@emotion/core';

const RootIndex = () => {
	return (
		<Layout>
			<div
				css={css`
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				`}
			>
				<Component1 />
				<Component2 />
			</div>
			<div
				css={css`
					margin: 1.5rem 0;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				`}
			>
				<Component3 number={'3'} />
				<Component3 number={'2'} />
				<Component3 number={'1'} />
				<Component3 number={'0'} />
			</div>
			<div
				css={css`
					display: flex;
					flex-direction: row;
					justify-content: space-around;
				`}
			>
				<Component4 number={'2'} />
				<Component4 number={'1'} />
				<Component4 number={'0'} />
			</div>
			<div
				css={css`
					margin: 1rem 0;
					display: grid;
					grid-template-columns: 48.1875rem 23.25rem;
					grid-template-rows: 1fr 0.32fr 0.32fr;
					grid-gap: 2rem;
				`}
			>
				<Component5
					css={css`
						grid-column: 1 / 2;
						grid-row: 1 / 3;
					`}
				/>
				<div
					css={css`
						width: 25rem;
						grid-column: 2 / 3;
						grid-row: 1 / 4;
						border-radius: 15px;
						overflow: hidden;
						background-color: #fff;
					`}
				>
					<h3
						css={css`
							margin: 0;
							padding: 0.875rem;
							color: #fff;
							background-color: #3f51b5;
							text-align: center;
							font-size: 1.125rem;
							font-weight: bolder;
							text-transform: uppercase;
						`}
					>
						Latest News
					</h3>
					<Component6 number={'6'} />
					<Component6 number={'5'} />
					<Component6 number={'4'} />
					<Component6 number={'3'} />
					<Component6 number={'2'} />
					<h4
						css={css`
							text-transform: uppercase;
							color: #7b8591;
							text-align: center;
							margin-top: 2.125rem;
							padding-top: 1.625rem;
							border-top: 1px solid #95989a;
						`}
					>
						More News
					</h4>
				</div>
				<div
					css={css`
						grid-column: 1 / 3;
						grid-row: 2 / 4;
						width: 48.1875rem;
						height: 10.9375rem;
						background-color: #fff;
						border-radius: 15px;
						display: flex;
						flex-direction: row;
					`}
				>
					<Component6 number={'1'} />
					<Component6 number={'0'} />
				</div>
				<div
					css={css`
						grid-column: 1 / 2;
						grid-row: 3 / 4;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
					`}
				>
					<Component7 number={'3'} />
					<Component7 number={'2'} />
				</div>
			</div>
			<div
				css={css`
					margin: 2rem 0;
					display: grid;
					grid-template-columns: 1fr;
					grid-row: 1fr 1fr;
					grid-gap: 2rem;
				`}
			>
				<Component7
					number={'1'}
					css={css`
						grid-column: 1 / 2;
						grid-row: 1 / 2;
					`}
				/>
				<Component7
					number={'0'}
					css={css`
						grid-column: 1 / 2;
						grid-row: 2 / 3;
					`}
				/>
			</div>
		</Layout>
	);
};

export default RootIndex;
