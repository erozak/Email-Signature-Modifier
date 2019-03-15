import get from 'lodash/get';

const getEnv = (key, defaultValue) => get(process.env, key, defaultValue);

const config = {
  name: {
    givenName: getEnv('GIVEN_NAME'),
    surname: getEnv('SURNAME'),
  },
  phoneNumber: get('PHONE_NUMBER'),
  emailAddress: get('EMAIL_ADDRESS'),
  logo: {
    image: get('LOGO_IMAGE'),
    link: get('LOGO_LINK'),
  },
  socialMedias: [
    {
      key: 'Linkedin',
      id: get('LINKED_ID'),
      icon: get('LINKED_ICON'),
    },
    {
      key: 'Github',
      id: get('GITHUB_USER'),
      icon: get('GITHUB_ICON'),
    },
  ],
};

export default config;
