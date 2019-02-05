import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Link from '../components/Link';
import Title from '../components/mdx/Title';
import { PageWrapper } from '../components/Common';
import { SiteMetadata } from '../types/SiteMetadata';

const PageContent = styled(PageWrapper)`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 0 20px;
`;

const LastUpdatedDate = styled.p`
    align-self: center;
`;

export default ({ data: { site } }: { data: { site: { siteMetadata: SiteMetadata } } }) => (
    <Layout site={site} hideMenu={true} hideFooter={true}>
        <PageContent>
            <Title>Privacy Policy</Title>
            <LastUpdatedDate>Last Updated: 02/10/2018</LastUpdatedDate>
            <h2>Overview</h2>
            <p>
                This Privacy Policy describes the information collected by Robert Cooper (’we’, 'our’, ‘us’) through the
                Meat Journal application we use that information.
            </p>
            <h2>We Don’t Collect Your Data</h2>
            <p>
                We don’t collect any of the data associated with activities in the application. All data is stored
                locally on the user’s device and therefore all app data is deleted if a user deletes the application.
            </p>
            <p>
                If you have any questions or concerns regarding this Privacy Policy, please send us an email at{' '}
                <Link to="mailto:hi@robertcooper.me">hi@robertcooper.me</Link>.
            </p>
        </PageContent>
    </Layout>
);

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
                siteUrl
            }
        }
    }
`;
