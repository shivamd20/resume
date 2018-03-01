import en from './en';
import fr from './fr';
import ja from './ja';
import hi from './hi';
import dot from 'dot-object';

const languages = { en: dot.dot(en), fr: dot.dot(fr), ja: dot.dot(ja) , hi: dot.dot(hi)};

export default languages;