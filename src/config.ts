import type { Site, SocialObjects } from './types';

export const SITE: Site = {
    website: 'https://embed.buntin.xyz',
    author: 'Buntin',
    desc: 'My private website for embed',
    title: 'buntin-embed',
    ogImage: 'astropaper-og.jpg',
    lightAndDarkMode: true,
    postPerPage: 5,
};

export const LOCALE = ['jp-JP']; // set to [] to use the environment default

export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 216,
    height: 46,
};

export const SOCIALS: SocialObjects = [
    {
        name: 'Github',
        href: 'https://github.com/BuntinJP',
        linkTitle: `Github of ${SITE.author}`,
        active: true,
    },
    {
        name: 'Facebook',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Facebook`,
        active: false,
    },
    {
        name: 'Instagram',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Instagram`,
        active: false,
    },
    {
        name: 'LinkedIn',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on LinkedIn`,
        active: false,
    },
    {
        name: 'Mail',
        href: 'mailto:mail@buntin.xyz',
        linkTitle: `Send an email to ${SITE.title}`,
        active: true,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/LArchel_Liz',
        linkTitle: `${SITE.title} on Twitter`,
        active: true,
    },
    {
        name: 'Twitch',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Twitch`,
        active: false,
    },
    {
        name: 'YouTube',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on YouTube`,
        active: false,
    },
    {
        name: 'WhatsApp',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on WhatsApp`,
        active: false,
    },
    {
        name: 'Snapchat',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Snapchat`,
        active: false,
    },
    {
        name: 'Pinterest',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Pinterest`,
        active: false,
    },
    {
        name: 'TikTok',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on TikTok`,
        active: false,
    },
    {
        name: 'CodePen',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on CodePen`,
        active: false,
    },
    {
        name: 'Discord',
        href: 'https://discordapp.com/users/551395071774425088',
        linkTitle: `${SITE.title} on Discord`,
        active: true,
    },
    {
        name: 'GitLab',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on GitLab`,
        active: false,
    },
    {
        name: 'Reddit',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Reddit`,
        active: false,
    },
    {
        name: 'Skype',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Skype`,
        active: false,
    },
    {
        name: 'Steam',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Steam`,
        active: false,
    },
    {
        name: 'Telegram',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Telegram`,
        active: false,
    },
    {
        name: 'Mastodon',
        href: 'https://buntinjp.net',
        linkTitle: `${SITE.title} on Mastodon`,
        active: false,
    },
];
