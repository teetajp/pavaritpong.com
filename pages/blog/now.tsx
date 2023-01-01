import { Card, Container, Grid, Link, Text, Title } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { TransparentLink } from '@components';
import { getPosts, Post } from '@posts';
import {
  SiCplusplus, SiGit, SiGooglecloud, SiMaterialui, SiMysql, SiNodedotjs, SiPython, SiR, SiReact, SiRedux, SiScala, SiTypescript
} from 'react-icons/si';

interface AboutProps {
  experiences: Post[];
}
const stacks = [
  {
    Icon: SiScala,
    url: 'https://www.scala-lang.org/',
  },
  {
    Icon: SiPython,
    url: 'https://www.python.org/',
  },
  {
    Icon: SiCplusplus,
    url: 'https://isocpp.org/',
  },
  {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    Icon: SiReact,
    url: 'https://reactjs.org/',
  },
  {
    Icon: SiRedux,
    url: 'https://redux.js.org/',
  },
  {
    Icon: SiMaterialui,
    url: 'https://mui.com/',
  },
  {
    Icon: SiNodedotjs,
    url: 'https://nodejs.org/en/',
  },
  {
    Icon: SiMysql,
    url: 'https://www.mysql.com/',
  },
  {
    Icon: SiGooglecloud,
    url: 'https://cloud.google.com/',
  },
  {
    Icon: SiR,
    url: 'https://www.r-project.org/',
  },
  {
    Icon: SiGit,
    url: 'https://git-scm.com/',
  },
];

const Now = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>What I'm Doing Now</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize={['3rem', '4rem']} as="h2">
        What I'm Doing Now
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="2rem">
        <Text>Born and raised in Thailand, I moved to Minnesota, USA for high school since I was 13.
        Now, I&apos;m a Statistics & Computer Science undergrad at the University of Illinois Urbana-Champaign, expected to graduate in December 2024.</Text>
        <Text>
          I enjoy learning about how the world works. Some topics I like reading about, broadly speaking, include computer science, philosophy, economics, sociology, psychology, and biology.
        </Text>
        {/* <Text>
          This curiosity also carries over to my hobbies. I learn about food science to improve my cooking; Anatomy, physiology, and nutrition to optimize my gym and Muay Thai performance.
          ...
        </Text>
        <Text>
          Add more text here ...
        </Text> */}
      </Container>
    </Container>

    <Container
      paddingY="2rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Title fontSize="40px" as="h2">
        Technologies I frequently use
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {stacks.map(({ Icon, url }, i) => (
          <Link href={url} key={url}>
            <Card key={i}>
              <Icon size="2rem" />
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      paddingBottom="4rem"
      gridGap="3rem"
    >
      <Title fontSize="40px" as="h2">
        Work Experiences
      </Title>
      <Container width="100%">
        {experiences.map(({ data }, i) => (
          <TransparentLink href={`/about/${data.slug}`} key={data.slug}>
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{experiences.length - i}</Text>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text fontSize="smaller" margin={0}>
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
                <Text fontSize="1.5rem">&rarr;</Text>
              </Grid>
            </Grid>
          </TransparentLink>
        ))}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default Now;
