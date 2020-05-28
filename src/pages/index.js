import React from 'react';
import Layout from '../components/layout';
import Component1 from '../components/component1';

const RootIndex = () => {
	return (
		<Layout>
			<Component1 />
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
