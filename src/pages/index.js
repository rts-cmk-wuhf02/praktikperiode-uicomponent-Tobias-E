import React from 'react';
import Layout from '../components/layout';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import Component4 from '../components/Component4';
import Component5 from '../components/Component5';
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
					display: grid;
				`}
			>
				<Component5 />
			</div>
		</Layout>
	);
};

export default RootIndex;
