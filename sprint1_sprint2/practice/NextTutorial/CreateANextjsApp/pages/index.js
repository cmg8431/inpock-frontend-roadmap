import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styled from "styled-components";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <HeadingMd>{siteTitle}</HeadingMd>
      </Head>
      <section>
        <p>[blog]</p>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </section>
    </Layout>
  );
}

const HeadingMd = styled.title`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
