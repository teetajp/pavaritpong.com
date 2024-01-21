import { Card, Container, Grid, Link, Text, Title, Button } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { TransparentLink } from '@components';
import { getPosts, Post } from '@posts';
import {
  SiApachespark,
  SiDocker,
  SiCplusplus,
  SiMongodb,
  SiGit,
  SiGooglecloud,
  SiFlask,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiR,
  SiReact,
  SiScala,
  SiTypescript,
} from 'react-icons/si';

interface AboutProps {
  experiences: Post[];
}
const stacks = [
  {
    Icon: SiPython,
    url: 'https://www.python.org/',
  },
  {
    Icon: SiR,
    url: 'https://www.r-project.org/',
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
  // {
  //   Icon: SiMaterialui,
  //   url: 'https://mui.com/',
  // },
  {
    Icon: SiFlask,
    url: 'https://flask.palletsprojects.com/en/3.0.x/',
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
    Icon: SiGit,
    url: 'https://git-scm.com/',
  },
  {
    Icon: SiScala,
    url: 'https://www.scala-lang.org/',
  },
  {
    Icon: SiApachespark,
    url: 'https://spark.apache.org/',
  },
  {
    Icon: SiDocker,
    url: 'https://www.docker.com/',
  },
  {
    Icon: SiMongodb,
    url: 'https://www.mongodb.com/',
  },
];

const About = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize={['3rem', '4rem']} as="h2">
        About Me
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="2rem">
        <Text>
          Born and raised in Thailand, I embarked on an exciting journey when I
          moved to Minnesota, USA for high school at the age of 13. Currently
          pursuing a B.S. in Statistics & Computer Science at the University of
          Illinois Urbana-Champaign, with an expected graduation date of
          December 2024, my deep curiosity to understand the world and unravel
          the intricate processes that shape human decision-making drives me. By
          bridging the gap between abstract concepts and practical applications,
          I find joy in connecting theoretical ideas to real-world scenarios,
          using this approach to bring positive improvements to my surroundings.
        </Text>
        <Text>
          With a solid foundation in computer science and statistics, I
          confidently navigate the complexities of innovation. Leveraging
          technology and data, my ultimate goal is to make a lasting social
          impact by engaging in impactful projects and inspiring others to join
          me on this transformative journey. Guided by collaboration, empathy,
          and inclusivity, I strive to effect sustainable change and contribute
          to the betterment of society.
        </Text>
        <Text>
          Beyond my academic pursuits, my interests extend to various
          disciplines such as philosophy, economics, sociology, and psychology,
          which enhance my understanding of complex societal issues and foster a
          holistic approach to problem-solving.
          {/* As for research interests, I am
          particularly intrigued by algorithmic game theory, mechanism design,
          operations research, artificial intelligence, and cognitive science. */}
          Exploring these fields allows me to delve into the intricacies of
          decision-making and contribute to innovative solutions.
        </Text>

        <Text>
          In addition to research, I am captivated by the realms of quantitative
          trading and data science, finding excitement in applying my skills and
          knowledge to real-world contexts, unlocking valuable insights, and
          driving informed decision-making. Outside of my academic and
          professional endeavors, I engage in hobbies that combine competition
          and creativity, such as practicing Muay Thai, playing poker,
          experimenting with cooking, diving into books, weightlifting, and
          expressing myself through the piano. These activities provide me with
          an outlet to explore different facets of my personality and nurture a
          well-rounded approach to life.
        </Text>
      </Container>
    </Container>

    <Container
      paddingY="1rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Title fontSize="40px" as="h2">
        Technologies I Have Worked With
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
      gridGap="2rem"
    >
      <Grid
        gridGap={['3rem', '30rem']}
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
        justifyItems="center"
        alignItems="stretch"
      >
        <Title fontSize="40px" as="h2">
          Work Experiences
        </Title>
        <Link
          href="/TJ_Pavaritpong_Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button variant="animated" width="100%">
            📥 Download Resumé
          </Button>
        </Link>
      </Grid>
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

export default About;
