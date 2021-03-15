/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const projects = [
  {
    image: require('../../assets/projects/github_presente_meeting.png').default,
    category: 'Meetings',
    name: 'GitHub Presente (Spanish)',
    description: 'I talk about "Why is Rustlang getting a bigger community?" in Spanish.',
    date: '17 of November of 2020',
    links: {
      YouTube: 'https://youtu.be/l8bLDR89qHA?t=4893',
    },
    tags: [
      'RustLang',
      'Meeting',
    ],
  },
  {
    image: require('../../assets/projects/amva_web.png').default,
    category: 'FullStack - Contribution',
    name: 'A.M.V.A. App (API & Web)',
    description: 'I add the animations of the webpage using react-spring and the views styles.',
    date: 'November of 2020',
    links: {
      GitHub: 'https://github.com/danielsolartech/amva-app',
      Web: 'https:/amva40.github.io',
    },
    tags: [
      'BackEnd',
      'NodeJS',
      'JavaScript',
      'TypeScript',
      'Contribution',
      'ReactJS',
      'OpenSourceMap',
      'DeckGL',
      'OpenSourceControl',
      'SuperCollider'
    ],
  },
  {
    image: require('../../assets/projects/becca_lyria.png').default,
    category: 'BackEnd',
    name: 'Becca-Lyria (Discord Bot)',
    description: 'I make a refactor to the Discord bot of nhcarrigan.',
    date: 'October of 2020',
    links: {
      'GitHub (Bot)': 'https://github.com/nhcarrigan/Becca-Lyria',
      'GitHub (Documentation)': 'https://github.com/nhcarrigan/Becca-Lyria-documentation',
    },
    tags: [
      'BackEnd',
      'NodeJS',
      'JavaScript',
      'TypeScript',
      'DiscordJS',
      'Contribution',
      'Refactor',
    ],
  },
  {
    image: require('../../assets/projects/portfolio.png').default,
    category: 'FrontEnd',
    name: 'Portfolio V1',
    description: 'Personal portfolio.',
    date: 'September of 2020',
    links: {
      GitHub: 'https://github.com/danielsolartech/danielsolartech.github.io'
    },
    tags: [
      'FrontEnd',
      'ReactJS',
      'SASS',
      'NodeJS',
      'CSS3',
      'HTML5',
      'JavaScript',
    ],
  },
  {
    image: require('../../assets/projects/sflynlang_icon.png').default,
    category: 'BackEnd',
    name: 'Sflynlang',
    description: 'High-Level programming language, the primary interpreter is written in Rustlang.',
    date: 'August of 2020',
    links: {
      'GitHub (Interpreter)': 'https://github.com/sflynlang/sflynlang-interpreter',
    },
    tags: [
      'BackEnd',
      'RustLang',
      'Interpreter',
      'Typechecker',
      'Parser',
    ],
  },
  {
    image: require('../../assets/projects/spooked_cms.png').default,
    category: 'BackEnd',
    name: 'SpookedCMS',
    description: 'CMS for NodeJS with Themes and Plugins.',
    date: 'August of 2020',
    links: {
      GitHub: 'https://github.com/danielsolartech/spooked-cms',
    },
    tags: [
      'BackEnd',
      'NodeJS',
      'JavaScript',
      'TypeScript',
      'MySQL',
      'TypeORM',
      'MongoDB',
      'Mongoose',
      'CMS',
    ],
  },
  {
    image: require('../../assets/projects/rust_notes_cli.png').default,
    category: 'BackEnd',
    name: 'Rust Notes CLI',
    description: 'Manage notes in your computer using the console.',
    date: 'August of 2020',
    links: {
      GitHub: 'https://github.com/danielsolartech/rust-notes-cli',
    },
    tags: [
      'Rust',
      'CLI',
    ],
  },
  {
    category: 'Mobile',
    name: 'NextMusic APP',
    description: 'Music player for Android.',
    date: 'July of 2020',
    links: {
      GitHub: 'https://github.com/danielsolartech/nextmusic',
    },
    tags: [
      'FrontEnd',
      'Android',
      'Mobile',
      'ReactJS',
      'SASS',
      'NodeJS',
      'CSS3',
      'HTML5',
      'JavaScript',
      'TypeScript',
      'Ionic',
    ],
  },
  {
    image: require('../../assets/projects/nextmusic_concept.png').default,
    category: 'Design',
    name: 'NextMusic Concept',
    description: 'Concept of NextMusic APP.',
    date: 'July of 2020',
    tags: [
      'Design',
      'Figma',
    ],
  },
  {
    image: require('../../assets/projects/fazt_community_landing_page.jpeg').default,
    category: 'Design',
    name: 'Fazt Community Landing Page Design',
    description: 'Temporary landing page for faztcommunity.dev.',
    date: 'July of 2020',
    links: {
      Tweet: 'https://twitter.com/FaztTech/status/1281102226237292544?s=20',
    },
    tags: [
      'FrontEnd',
      'Design',
      'CSS3',
      'HTML5',
    ],
  },
  {
    image: require('../../assets/projects/faztbot.png').default,
    category: 'BackEnd - Contribution',
    name: 'Fazt-bot',
    description: 'Multipurpose bot for Fazt Tech\'s Discord server.',
    date: 'June of 2020',
    links: {
      GitHub: 'https://github.com/faztcommunity/fazt-bot',
    },
    tags: [
      'BackEnd',
      'NodeJS',
      'JavaScript',
      'TypeScript',
      'DiscordJS',
      'Contribution',
    ],
  },
  {
    image: require('../../assets/projects/nextchat_profile.png').default,
    category: 'FullStack',
    name: 'NextChat V1',
    description: 'Messages social network.<br><br>- You can send and receive messages.<br>- Verify your account using your e-mail.<br>- Send friend requests.',
    date: 'June of 2020',
    links: {
      'GitHub (API)': 'https://github.com/danielsolartech/nextchat-api',
      'GitHub (WEB)': 'https://github.com/danielsolartech/nextchat-web',
    },
    tags: [
      'BackEnd',
      'NodeJS',
      'JavaScript',
      'TypeScript',
      'MySQL',
      'TypeORM',
      'Socket.IO',
      'SendGrid',
      'FrontEnd',
      'ReactJS',
      'Redux',
      'Webpack',
      'Babel',
    ],
  },
];

export default projects;
