// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Vila Velha",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://feliperb.dev.br",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "Anime & Manga",
          links: [
            {
              name: "mangadex",
              url: "https://mangadex.org",
              icon: "books",
              icon_color: palette.peach,
            },
            {
              name: "betteranime",
              url: "https://betteranime.net",
              icon: "cast",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "canva",
              url: "https://canva.com",
              icon: "table",
              icon_color: palette.maroon,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "homelab",
          links: [
            {
              name: "jellyfin",
              url: "http://192.168.18.142:8096",
              icon: "cast",
              icon_color: palette.maroon,
            },
            {
              name: "immich",
              url: "http://192.168.18.142:2283",
              icon: "photo",
              icon_color: palette.green,
            },
            {
              name: "transmission",
              url: "http://192.168.18.142:9091",
              icon: "broadcast",
              icon_color: palette.red,
            },
            {
              name: "syncthing",
              url: "http://192.168.18.142:8384",
              icon: "refresh",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "freecodecamp",
              url: "https://www.freecodecamp.org",
              icon: "code",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "devdocs",
              url: "https://devdocs.io",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-11.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "",
              url: "https://www.x.com",
              icon: "brand-x",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "protondb",
              url: "https://protondb.com",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "myanimelist",
              url: "https://myanimelist.net",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
