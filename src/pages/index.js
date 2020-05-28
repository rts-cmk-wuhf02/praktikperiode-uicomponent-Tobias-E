import React from 'react';
import Layout from '../components/layout';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component3 from '../components/component3';
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
		</Layout>
	);
};

export default RootIndex;

/* export const componentQuery = graphql`
	query componentQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulComponent1 {
			nodes {
				heading
				bodyText {
					bodyText
				}
				category
				image {
					fluid(maxWidth: 400) {
						...GatsbyContentfulFluid
					}
				}
			}
		}
	}
`; */
