import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/avatar.png';

export const siteConfig: Site.Config = {
  url: 'https://fearnot221.vercel.app',
  title: "Fearnot's Blog",
  subtitle: 'Fearnot Blog',
  description: 'Fearnot Blog',
  lang: 'zh-Hant',
  timeZone: 'Asia/Taipei',
  since: 2024,
  cover: SiteCover,
  author: {
    name: 'Fearnot',
    status: '🪺',
    statusTip:
      '<a href="https://scist.org/" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >SCIST</a> is Great !',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://fearnot221.vercel.app',
    github: 'https://github.com/fearnot221',
    email: 'kenin221@gmail.com',
    bio: `I like❄️</br>Winter⭐️`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['/'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment

          // Replace the following with your own setting

          // Plausible
          // '<link rel="preconnect" href="https://plausible.kwchang0831.dev" />',
          // '<script defer type="text/partytown" data-domain="svelte-qwer.vercel.app" src="https://plausible.kwchang0831.dev/js/plausible.js"></script>',
          // Google tag (gtag.js)
          `<script async src="https://www.googletagmanager.com/gtag/js?id=G-WZMWHS4VJ5"></script>`,
          `<script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WZMWHS4VJ5');
          </script>`,
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: "fearnot221/fearnot221.vercel.app",
  repoId: "R_kgDOM2SJuw",
  category: 'General',
  categoryId: "DIC_kwDOM2SJu84CivPR",
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  loading: 'lazy',
  lang: 'zh-TW',
  // 'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'SCIST',
    url: 'https://scist.org',
    target: '_blank'
  }
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'SCIST',
      url: 'https://scist.org',
      target: '_blank'
    }
  ],
};
