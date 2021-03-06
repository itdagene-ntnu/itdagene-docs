/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
//const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

// eslint-disable-next-line no-unused-vars
const Container = CompLibrary.Container;
// eslint-disable-next-line no-unused-vars
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

/* function docUrl(doc, language) {
  return `${siteConfig.bRseUrl}docs/${language ? `${language}/` : ''}${doc}`;
} */

/* function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
} */

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self'
};

// eslint-disable-next-line no-unused-vars
const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

// eslint-disable-next-line no-unused-vars
const Logo = props => (
  <div
    className="projectLogo"
    style={{
      justifyContent: 'center !important',
      height: '200px'
    }}
  >
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

/* const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
); */

/* const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
); */

// eslint-disable-next-line no-unused-vars
class HomeSplash extends React.Component {
  render() {
    return (
      <SplashContainer>
        <Logo img_src={'/img/itdagene-grey.png'} />
      </SplashContainer>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
  >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

// eslint-disable-next-line no-unused-vars
const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: '',
        image: imgUrl('graphql.svg'),
        imageAlign: 'top',
        title: 'GraphQL'
      },
      {
        content: '',
        image: imgUrl('django.jpg'),
        imageAlign: 'top',
        title: 'Django'
      },
      {
        content: '',
        image: imgUrl('node.png'),
        imageAlign: 'top',
        title: 'NodeJS'
      },
      {
        content: '',
        image: imgUrl('hubot.png'),
        imageAlign: 'top',
        title: 'Hubot'
      },
      {
        content: '',
        image: imgUrl('postgres.png'),
        imageAlign: 'top',
        title: 'PostgreSQL'
      },
      {
        content: '',
        image: imgUrl('redis.png'),
        imageAlign: 'top',
        title: 'Redis'
      },
      {
        content: '',
        image: imgUrl('traefik.svg'),
        imageAlign: 'top',
        title: 'Traefik'
      },
      {
        content: '',
        image: imgUrl('nginx.png'),
        imageAlign: 'top',
        title: 'Nginx'
      },
      {
        content: '',
        image: imgUrl('metabase.png'),
        imageAlign: 'top',
        title: 'Metabase'
      },
      {
        content: '',
        image: imgUrl('backblaze.png'),
        imageAlign: 'top',
        title: 'Backblaze'
      },
      {
        content: '',
        image: imgUrl('typescript.png'),
        imageAlign: 'top',
        title: 'TypeScript'
      },
      {
        content: '',
        image: imgUrl('docker.png'),
        imageAlign: 'top',
        title: 'Docker'
      }
    ]}
  </Block>
);

/* const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{ textAlign: 'center' }}
  >
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
); */

/* const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How'
      }
    ]}
  </Block>
); */

/* const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out'
      }
    ]}
  </Block>
); */

/* const Description = () => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description'
      }
    ]}
  </Block>
); */

/* const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users
    .filter(user => user.pinned)
    .map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
}; */

// Frontpage component
class Index extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          {/*<FeatureCallout />*/}
          {/*<LearnHow />*/}
          {/*<TryOut />*/}
          {/*<Description />*/}
          {/*<Showcase language={language} />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
