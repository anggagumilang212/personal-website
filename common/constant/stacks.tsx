import { BsFillBootstrapFill } from 'react-icons/bs'
import {
  SiLaravel,
  SiCss3,
  SiMysql,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiProxmox,
  SiFlutter,
  SiGoogleplay,
  SiAppstore,
} from 'react-icons/si'

type stacksProps = {
  [key: string]: JSX.Element
}

const iconSize = '100%'

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  'React.js': <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  Vite: <SiVite size={iconSize} className="text-yellow-500" />,
  // PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  Proxmox: <SiProxmox size={iconSize} className="text-red-700" />,
  Laravel: <SiLaravel size={iconSize} className="text-red-500" />,
  Mysql: <SiMysql size={iconSize} className="text-yellow-500" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Github: <SiGithub size={iconSize} />,
  Git: <SiGit size={iconSize} className="text-orange-500" />,
  Nextjs: <SiNextdotjs size={iconSize} className="text-slate-800" />,
  Flutter: <SiFlutter size={iconSize} className="text-cyan-400" />,
  'Playstore Deploy': <SiGoogleplay size={iconSize} className="text-green-500" />,
  'Appstore Deploy': <SiAppstore size={iconSize} className="text-blue-500" />,
}
