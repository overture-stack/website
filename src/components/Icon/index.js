// All them icons
import React from 'react'
import './styles.scss'
import arrowRight from './icons/arrow_right.svg'
import arrowRightMagenta from './icons/arrow_right_magenta.svg'
import arrowDown from './icons/arrow_down.svg'
import barGraph from './icons/bar_graph.svg'
import cardStack from './icons/card_stack.svg'
import checkmark from './icons/checkmark.svg'
import cloud from './icons/cloud.svg'
import cloudSquare from './icons/cloud_square.svg'
import customizable from './icons/customizable.svg'
import database from './icons/database.svg'
import dna from './icons/dna.svg'
import download from './icons/download.svg'
import extensible from './icons/extensible.svg'
import fingerSnap from './icons/finger_snap.svg'
import githubGrey from './icons/github_grey.svg'
import githubWhite from './icons/github_white.svg'
import githubYellow from './icons/github_yellow.svg'
import graphCycle from './icons/graph_cycle.svg'
import gridGlass from './icons/grid_magnifying_glass.svg';
import history from './icons/history.svg'
import lock from './icons/lock.svg'
import lockCode from './icons/lock_code.svg'
import mail from './icons/mail.png'
import magnify from './icons/magnify.svg'
import pageWhite from './icons/page_white.svg'
import palette from './icons/palette.svg'
import power from './icons/power.svg'
import rocketWhite from './icons/rocket_white.svg'
import security from './icons/security.svg'
import share from './icons/share.svg'
import search from './icons/search.svg'
import shield from './icons/shield.svg'
import spiral from './icons/spiral.svg'
import star from './icons/star.svg'
import target from './icons/target.svg'
import user from './icons/user.svg'
import slack from './icons/icon-slack.svg'

const icons = {
  arrowRight,
  arrowRightMagenta,
  arrowDown,
  barGraph,
  cardStack,
  checkmark,
  customizable,
  cloud,
  cloudSquare,
  database,
  dna,
  download,
  extensible,
  fingerSnap,
  githubGrey,
  githubWhite,
  githubYellow,
  graphCycle,
  gridGlass,
  history,
  lock,
  lockCode,
  mail,
  magnify,
  pageWhite,
  palette,
  power,
  rocketWhite,
  search,
  security,
  share,
  shield,
  spiral,
  star,
  target,
  user,
  slack
}

const Icon = ({ img, size, className, style }) => (
  <img
    className={`${className ? className : "" } Icon`}
    src={icons[img]}
    style={{ width: size, height: 'auto', ...style }}
  />
)

export default Icon
