import React from 'react';
import Link from 'gatsby-link';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        className={this.props.name}
        key={this.props.id}
        title={this.props.name}
        link={this.props.link}
      >
        {{ name }}
      </Card>
    );
  }
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data: { allBehanceProjects: { edges } } } = this.props;
    const Cards = this.props.data.allBehanceProjects.edges.map(edge => (
      <Cards
        key={edge.node.id}
        id={edge.node.id}
        name={edge.node.name}
        cover={edge.node.cover}
      />
    ));
    console.log(Squares, this.state);
  }
}

export default class TemplateWrapper extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          margin: '-6rem auto 0 auto',
          maxWidth: 1200,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          position: 'relative'
        }}
      >
        {children()}
      </div>
    );
  }
}

export const userQuery = graphql`
  query userQuery {
    allBehanceProjects {
      edges {
        node {
          name
          projectID
          published
          created
          modified
          conceived
          url
          areas
          cover
          stats {
            views
            appreciations
            comments
          }
        }
      }
    }
  }
`;
