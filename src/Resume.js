import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withTheme } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import Icon from 'material-ui/Icon';
import LaravelIcon from 'react-devicon/laravel/plain'
import PhpIcon from 'react-devicon/php/plain'
import ReactIcon from 'react-devicon/react/original'
import Helmet from 'react-helmet';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import ScreenBlock from './ScreenBlock';
import BottomNavigation from './BottomNavigation';
import './Resume.css';
import 'react-vertical-timeline-component/style.min.css';

class Resume extends Component {

  constructor() {
    super();
    this.renderSkillsCategory = this.renderSkillsCategory.bind(this);
  }

  getSkillsByCategories() {
    const { skills } = this.props;

    const skillsByCategories = skills.reduce(function (obj, item) {
      obj[item.category.name] = obj[item.category.name] || [];
      obj[item.category.name].push(item);
      return obj;
    }, {});

    return Object.keys(skillsByCategories).map(function (key) {
      return skillsByCategories[key];
    });
  }

  renderSkillsCategory(skillCategory, i) {
    const { theme } = this.props;
    const primaryColor = theme.palette.primary[500];
    const secondaryColor = theme.palette.secondary[500];

    const styles = {
      primaryColor: {
        background: primaryColor,
        color: '#fff',
      },
      secondaryColor: {
        background: secondaryColor,
        color: '#fff',
      },
    };

    return (
      <Card key={i} className="Resume-skills-category" style={i & 1 ? styles.secondaryColor : styles.primaryColor}>
        <CardContent>
          <h3>{skillCategory[0].category.name}</h3>

          <div className="Resume-skills-category-skills">
            {skillCategory.map((skill, j) =>
              <div className="Resume-skill" key={i + '-' + j}>
                <div className="Resume-skillTitle">{skill.name}</div>
              </div>
            )}
          </div>

        </CardContent>
      </Card>
    );
  }

  renderButtons(links) {
    if (!(links instanceof Array)) {
      return '';
    }

    return (
      <div className="Resume-project-links">
        {links.map((link, i) =>
          <Button key={i} raised color="default" target="_blank" href={link.url}>{link.text}</Button>
        )}
      </div>
    );
  }

  renderTechnologies(technologies) {
    if (!(technologies instanceof Array)) {
      return '';
    }

    return (
      <div className="Resume-project-technologies">
        {technologies.map((technology, j) =>
          <Chip
            key={j}
            label={technology.name}
          />
        )}
      </div>
    );
  }

  render() {
    let fullName = `${this.props.firstName} ${this.props.lastName}`;
    if (this.props.firstNameKana) {
      fullName += ' (' + this.props.firstNameKana + ' ' + this.props.lastNameKana + ')'
    }

    const cv = this.props.cvPDF;

    const { theme } = this.props;
    const { formatMessage, formatDate } = this.props.intl;

    const primaryColor = theme.palette.primary[500];
    const secondaryColor = theme.palette.secondary[500];

    const skills = this.getSkillsByCategories();

    const styles = {
      primaryColor: {
        background: primaryColor,
        color: '#fff',
      },
      secondaryColor: {
        background: secondaryColor,
        color: '#fff',
      },
      laravelColor: {
        style: {
          background: '#fd4f31',
          color: '#fff',
        },
        className: 'vertical-timeline-element--laravel',
        icon: <LaravelIcon />,
      },
      phpColor: {
        style: {
          background: '#6181b6',
          color: '#fff',
        },
        className: 'vertical-timeline-element--php',
        icon: <PhpIcon />,
      },
      reactColor: {
        style: {
          background: '#61DAFB',
          color: '#fff',
        },
        className: 'vertical-timeline-element--react',
        icon: <ReactIcon />,
      },
    };

    return (
      <div className="Resume">
        <Helmet title={formatMessage({ id: 'Resume.resume', defaultMessage: 'Resume' })} />

        <ScreenBlock id="Resume-home" style={styles.phpColor.style}>
          <div className="container">

            <h2>
              <FormattedMessage
                id='Resume.aboutMe'
                defaultMessage='About me'
              />
            </h2>
            <FormattedMessage
              id='Resume.aboutMeSubtitle'
              defaultMessage='A small introduction about myself'
            />

            <div className="Resume-profilePicture">
              <img alt="" src={this.props.pictureUrl} />
            </div>

            <Typography className="Resume-fullName" type="headline" component="h3">
              {fullName}
            </Typography>

            <Typography className="Resume-headline" type="body1">
              {this.props.headline}
            </Typography>

            <Typography className="Resume-mainAddress">
              {this.props.mainAddress}
            </Typography>

            <br />
            <Divider />
            <br />

            <Typography className="Resume-summary" component="p"
                        dangerouslySetInnerHTML={{ __html: this.props.summary }} />

            <Button raised color="primary" target="_blank" href={cv}>
              <FormattedMessage
                id='Resume.download'
                defaultMessage='Download'
              />
            </Button>
            <Button href="mailto:monnot.stephane@gmail.com" raised color="accent">
              <FormattedMessage
                id='Resume.hireMe'
                defaultMessage='Hire me'
              />
            </Button>

          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-work">
          <div className="container">
            <h2>
              <FormattedMessage
                id='Resume.workExperienceAndEducation'
                defaultMessage='Work experience & Education'
              />
            </h2>

            <VerticalTimeline>
              {this.props.positions.map((position, i) =>
                <VerticalTimelineElement
                  className="Resume-position"
                  key={i}
                  icon={<WorkIcon />}
                  iconStyle={styles.primaryColor}
                  date={position.startDate + ' – ' + position.endDate + ' (' + ((position.endDate === 'Today' || position.endDate === 'Aujourd\'hui' || position.endDate === '今' ? (new Date()).getFullYear() : parseInt(position.endDate, 10)) - parseInt(position.startDate, 10)) + formatMessage({
                    id: 'Resume.years',
                    defaultMessage: ' years'
                  }) + ')'}
                >
                  <h3 className="vertical-timeline-element-title">{position.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{position.company}</h4>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: position.summary }}></span>
                  </p>
                </VerticalTimelineElement>
              )}

              {this.props.educations.map((education, i) =>
                <VerticalTimelineElement
                  id="Resume-education"
                  className="Resume-position"
                  key={i}
                  icon={<SchoolIcon />}
                  iconStyle={styles.secondaryColor}
                  date={education.startDate + ' – ' + education.endDate + ' (' + ((education.endDate === 'Today' || education.endDate === 'Aujourd\'hui' || education.endDate === '今' ? (new Date()).getFullYear() : parseInt(education.endDate, 10)) - parseInt(education.startDate, 10)) + formatMessage({
                    id: 'Resume.years',
                    defaultMessage: ' years'
                  }) + ')'}
                >
                  <h3 className="vertical-timeline-element-title">{education.fieldOfStudy}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{education.degree}</h4>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: education.activities }}></span>
                  </p>
                </VerticalTimelineElement>
              )}
            </VerticalTimeline>
          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-skills">
          <div className="container">
            <h2>
              <FormattedMessage
                id='Resume.skills'
                defaultMessage='Skills'
              />
            </h2>
            <div className="Resume-skills">
              {skills.map(this.renderSkillsCategory)}
            </div>
          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-languages">
          <div className="container">
            <h2>
              <FormattedMessage
                id='Resume.languages'
                defaultMessage='Languages'
              />
            </h2>
            <ul className="Resume-languages">
              {this.props.languages.map((language, i) =>
                <li className="Resume-language" key={i}>
                  <span className="Resume-languageTitle">{language.name}</span> :
                  <span className="Resume-languageLevel"> {language.level}</span>
                </li>
              )}
            </ul>
          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-hobbies">
          <div className="container">
            <h2>
              <FormattedMessage
                id='Resume.interests'
                defaultMessage='Interests'
              />
            </h2>
            <div className="Resume-hobbies">
              {this.props.hobbies.map((hobby, i) =>
                <Card key={i} style={styles.primaryColor} className="Resume-hobby">
                  <CardContent>
                    <Icon>{hobby.icon}</Icon>
                    <h4>{hobby.name}</h4>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-projects">
          <div className="container">
            <h2>
              <FormattedMessage
                id='Resume.projectsAndDevelopments'
                defaultMessage='Projects & developments'
              />
            </h2>
            <VerticalTimeline>
              {this.props.projects.map((project, i) =>
                <VerticalTimelineElement
                  style={{ borderTop: '3px solid ' + styles[project.subcategory + 'Color'].border }}
                  className={"Resume-project " + styles[project.subcategory + 'Color'].className}
                  key={i}
                  icon={styles[project.subcategory + 'Color'].icon}
                  iconStyle={styles[project.subcategory + 'Color'].style}
                  date={formatDate(new Date(project.date).getTime(), {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric'
                  })}
                >
                  {this.renderTechnologies(project.technologies)}
                  <h3 className="vertical-timeline-element-title">{project.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: project.content }}></span>
                  </p>
                  <br />
                  {this.renderButtons(project.links)}
                </VerticalTimelineElement>
              )}
            </VerticalTimeline>
          </div>
        </ScreenBlock>

        <BottomNavigation />
      </div>
    );
  }
}

Resume.propTypes = {
  theme: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

Resume.defaultProps = {
  firstName: 'Stéphane',
  lastName: 'Monnot',
  emailAddress: 'monnot.stephane@gmail.com',
  headline: 'Full-stack web engineer',
  summary: '♥ Microservice architecture lover ♥<br>Experienced Chief Technology Officer, Developer & Teacher with a demonstrated history of working in the internet industry. Skilled in PHP (Symfony & Laravel frameworks), TDD, continuous integration, WordPress, Linux System Administration, and Application Programming Interfaces. Strong engineering professional with a Licence focused in Web Development from Université Claude Bernard Lyon 1. My favourite stack : Laravel 5, Symfony 3, PHPUnit, PHPQA, Micro-services, Docker, ReactJS, ReactNative with continuous integration on Gitlab.',
  pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAYqAAAAJGQ0YjYxNDI0LTEwOTMtNGVkNC1hNDIxLWYyNzNkMTYzNDMzNg.jpg',
  dateOfBirth: '1987-09-16',
  mainAddress: 'Noda, Osaka, Japan',
  websites: [],
  phoneNumbers: [],
  imAccounts: [],
  locations: [],
  positions: [],
  interests: '',
  languages: [],
  skills: [],
  educations: [],
  volunteer: [],
  hobbies: [],
  projects: [],
}

const decorators = flow([
  withTheme,
  injectIntl
]);

export default decorators(Resume);
