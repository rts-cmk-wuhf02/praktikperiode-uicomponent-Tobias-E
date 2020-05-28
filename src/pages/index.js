import React from 'react';
import Layout from '../components/layout';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
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
