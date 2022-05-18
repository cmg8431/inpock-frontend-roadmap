import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const name = "최민기";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <Wrapper>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            <Profile
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={name}
            />
            <Name>{name}</Name>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Profile
                  priority
                  src="/sprint1_sprint2/practice/NextTutorial/CreateANextjsApp/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <HeadInLg>
              <Link href="/">
                <ColorInHerit>{name}</ColorInHerit>
              </Link>
            </HeadInLg>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackToHome = styled.div`
  margin: 3rem 0 0;
`;

const Profile = styled(Image)`
  border-radius: 9999px;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const HeadInLg = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

const ColorInHerit = styled.a`
  color: inherit;
`;
