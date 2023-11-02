import {
  BiEditAlt as BlogIcon,
  BiPaperPlane as ContactIcon,
  BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiBookBookmark as LearnIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon
} from 'react-icons/bi'
import {
  BsDiscord as DiscordIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
  BsTwitter as TwitterIcon,
  BsYoutube as YoutubeIcon
} from 'react-icons/bs'
import { LuTrello, LuWorkflow } from 'react-icons/lu'

import { MenuItemProps } from '../types/menu'

const iconSize = 20

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home'
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects'
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog'
  },
  // {
  //   title: 'Learn',
  //   href: '/learn',
  //   icon: <LearnIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Learn'
  // },
  // {
  //   title: 'Roadmap',
  //   href: '/roadmap?tribe=frontend-developer',
  //   icon: <LuWorkflow size={iconSize} />,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Roadmap'
  // },
  // {
  //   title: 'Task Board',
  //   href: '/board',
  //   icon: <LuTrello size={iconSize} />,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Task Board'
  // },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact'
  },
  // {
  //   title: 'Dashboard',
  //   href: '/dashboard',
  //   icon: <DashboardIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Dashboard'
  // }
]

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/anggagumilang212',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    backgroundColor: 'bg-gray-800'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/angga-gumilang-30558327a/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    backgroundColor: 'bg-blue-500'
  },
  // {
  //   title: 'Twitter',
  //   href: 'https://twitter.com/',
  //   icon: <TwitterIcon size={iconSize} />,
  //   isShow: false,
  //   isExternal: true,
  //   eventName: 'Social: Twitter'
  // },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/lionel_zexx/',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
    backgroundColor: 'bg-pink-600'
  },
  // {
  //   title: 'Threads',
  //   href: '',
  //   icon: <ThreadsIcon size={iconSize} />,
  //   isShow: false,
  //   isExternal: true,
  //   eventName: 'Social: Threads'
  // },
  // {
  //   title: 'Discord',
  //   href: 'https://discord.gg/76UFeGdXy6',
  //   icon: <DiscordIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: true,
  //   eventName: 'Social: Discord',
  //   backgroundColor: 'bg-purple-700'
  // },
  // {
  //   title: 'Youtube',
  //   href: 'https://www.youtube.com/@codebayu',
  //   icon: <YoutubeIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: true,
  //   eventName: 'Social: Youtube',
  //   backgroundColor: 'bg-red-700'
  // },
  // {
  //   title: 'TikTok',
  //   href: 'https://www.tiktok.com/@codebayu.com',
  //   icon: <TiktokIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: true,
  //   eventName: 'Social: Tiktok',
  //   backgroundColor: 'bg-black'
  // }
]
