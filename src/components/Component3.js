import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Component3 = ({ number }) => {
	const data = useStaticQuery(graphql`
		query componentQuery3 {
			allContentfulComponent3 {
				nodes {
					heading
					bodyText {
						bodyText
					}
					color
					image {
						fluid(maxWidth: 400) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);

	const component = data.allContentfulComponent3.nodes;
	console.log(component);
	return (
		<article
			css={css`
				max-width: 250px;
				max-height: 272px;
				padding: 30px;
				background-color: ${component[number].color};
				border-radius: 15px;
				overflow: hidden;
				display: flex;
				flex-direction: column;
			`}
		>
			<Img
				fluid={component[number].image.fluid}
				css={css`
					margin-left: 180px;
					max-width: 75px;
					max-height: 100px;
				`}
			/>
			<h4
				css={css`
					margin-bottom: 10px;
					color: #fff;
				`}
			>
				{component[number].heading}
			</h4>
			<p
				css={css`
					margin: 0;
					color: #fff;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
				`}
			>
				{component[number].bodyText.bodyText}
			</p>
		</article>
	);
};

export default Component3;
