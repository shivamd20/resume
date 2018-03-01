import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridBackground from '../../components/GridBackground/GridBackground';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import appTheme from '../../theme';
import './ResumeHomeBlock.css';

class ResumeHomeBlock extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }
  }

  render() {
    const { style, shortFullName, headline } = this.props;
    return (
      <ScreenBlock id="Resume-home" style={style} className="ResumeHomeBlock">
        <div className="ResumeHomeBlock-headline-container">
          <div className="ResumeHomeBlock-headline">
            <h1>
              <FormattedMessage
                id='Resume.im'
                defaultMessage="I'm {fullName}"
                values={{ fullName: shortFullName }}
              />
            </h1>
            <h2>{headline}</h2>
          </div>
        </div>

        <div className="ResumeHomeBlock-squares">
          <GridBackground>
            <div style={{ ...appTheme.javaColor.style }}>
              {appTheme.javaColor.icon}
            </div>
            <div style={{ ...appTheme.nodeColor.style }}>
              {appTheme.nodeColor.icon}
            </div>
            <div style={{ ...appTheme.reactColor.style }}>
              {appTheme.reactColor.icon}
            </div>
            <div style={{ ...appTheme.androidColor.style }}>
              {appTheme.androidColor.icon}
            </div>
            <div style={{ ...appTheme.javascriptColor.style }}>
              {appTheme.javascriptColor.icon}
            </div>
            <div style={{ ...appTheme.gitColor.style }}>
              {appTheme.gitColor.icon}
            </div>
          </GridBackground>
        </div>
      </ScreenBlock>
    )
  }
};

ResumeHomeBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  shortFullName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ResumeHomeBlock.defaultPropTypes = {
  style: {},
};

export default ResumeHomeBlock;
