import React from 'react';

import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import LaravelIcon from 'react-devicon/laravel/plain'
import PhpIcon from 'react-devicon/php/plain'
import ReactIcon from 'react-devicon/react/original'
import RubyIcon from 'react-devicon/ruby/plain';
import RailsIcon from 'react-devicon/rails/plain';
import JavascriptIcon from 'react-devicon/javascript/plain';
import DockerIcon from 'react-devicon/docker/plain';
import WordpressIcon from 'react-devicon/wordpress/plain';
import CordovaIcon from './components/Icons/Apachecordova';
import IconJava from 'react-devicon/java/original'
import IconNodejs from 'react-devicon/nodejs/original'
import IconNpm from 'react-devicon/npm/original-wordmark'
import IconAndroid from 'react-devicon/android/plain' 
import IconGit from 'react-devicon/git/original'

const theme = {
  
  laravelColor: {
    style: {
      background: '#fd4f31',
      color: '#fff',
    },
    className: 'vertical-timeline-element--laravel',
    icon: <IconJava />,
  },
  phpColor: {
    style: {
      background: '#1CA554',
      color: '#lightGreen',
    },
    className: 'vertical-timeline-element--php',
    icon: <IconNodejs />,
  },
  reactColor: {
    style: {
      background: '#61DAFB',
      color: '#fff',
    },
    className: 'vertical-timeline-element--react',
    icon: <ReactIcon />,
  },
  rubyColor: {
    style: {
      background: 'green',
      color: '#fff',
    },
    className: 'vertical-timeline-element--ruby',
    icon: <IconAndroid />,
  },
  railsColor: {
    style: {
      background: '#a62c46',
      color: '#fff',
    },
    className: 'vertical-timeline-element--rails',
    icon: <IconNpm /> ,
  },
  javascriptColor: {
    style: {
      background: '#F0DB4F',
      color: '#fff',
    },
    className: 'vertical-timeline-element--javascript',
    icon: <JavascriptIcon />,
  },
  dockerColor: {
    style: {
      background: '#019bc6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--docker',
    icon: <IconGit />,
  },
  cordovaColor: {
    style: {
      background: '#4CC2E4',
      color: '#fff',
    },
    className: 'vertical-timeline-element--cordova',
    icon: <CordovaIcon />,
  },
  wordpressColor: {
    style: {
      background: '#21759b',
      color: '#fff',
    },
    className: 'vertical-timeline-element--wordpress',
    icon: <WordpressIcon />,
  },
  othersColor: {
    style: {
      background: '#019bc6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--others',
    icon: <MoreHorizIcon />,
  }
};

export default theme;
