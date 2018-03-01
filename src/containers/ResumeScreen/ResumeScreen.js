import React, { Component } from 'react';
import { connect } from 'react-redux';
import cvFR from '../../data/fr.json';
import cvJA from '../../data/ja.json';
import cvEN from '../../data/en.json';
import cvPDFFR from '../../data/fr.pdf';
import cvPDFJA from '../../data/ja.pdf';
import cvPDFEN from '../../data/en.pdf';
import cvHindi from '../../data/hi.json';
import Resume from '../Resume/Resume';

class ResumeScreen extends Component {
  componentWillMount() {
    this.setState({
      cvs: {fr: cvFR, ja: cvJA, en: cvEN, hi: cvHindi},
      cvPDFs: {fr: cvPDFFR, ja: cvPDFJA, en: cvPDFEN}
    });
  }

  render() {
    const cv = this.state.cvs[this.props.currentLanguage];
    const cvPDF = this.state.cvPDFs[this.props.currentLanguage];
    return (
      <Resume {...cv} cvPDF={cvPDF}/>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    currentLanguage: state.language.lang
  })
};

export default connect(mapStateToProps)(ResumeScreen);
