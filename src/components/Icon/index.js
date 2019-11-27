// All them icons
import React from 'react'
import './styles.scss'

import arrowDown from './icons/arrow_down.svg'
import arrowRight from './icons/arrow_right.svg'
import arrowRightMagenta from './icons/arrow_right_magenta.svg'
import arrowsRight from './icons/arrows_right.svg'
import arrowRightRound from './icons/arrow_right_round.svg'
import arrowLeftRound from './icons/arrow_left_round.svg'
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
import gridGlass from './icons/grid_magnifying_glass.svg'
import history from './icons/history.svg'
import kafka from './icons/kafka.svg'
import lock from './icons/lock.svg'
import lockCode from './icons/lock_code.svg'
import magnify from './icons/magnify.svg'
import mail from './icons/mail.png'
import pageWhite from './icons/page_white.svg'
import palette from './icons/palette.svg'
import play from './icons/play.svg'
import power from './icons/power.svg'
import productArranger from './icons/productArranger.svg'
import productBilling from './icons/productBilling.svg'
import productEgo from './icons/productEgo.svg'
import productEnrolment from './icons/productEnrolment.svg'
import productJukebox from './icons/productJukebox.svg'
import productMaestro from './icons/productMaestro.svg'
import productOnco from './icons/productOnco.svg'
import productPersona from './icons/productPersona.svg'
import productRiff from './icons/productRiff.svg'
import productScore from './icons/productScore.svg'
import productSong from './icons/productSong.svg'
import rocketWhite from './icons/rocket_white.svg'
import search from './icons/search.svg'
import security from './icons/security.svg'
import share from './icons/share.svg'
import shield from './icons/shield.svg'
import slack from './icons/icon-slack.svg'
import spiral from './icons/spiral.svg'
import star from './icons/star.svg'
import target from './icons/target.svg'
import user from './icons/user.svg'
import vennDiagram from './icons/venn_diagram.svg'

const icons = {
  arrowRight,
  arrowsRight,
  arrowRightRound,
  arrowLeftRound,
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
  kafka,
  lock,
  lockCode,
  mail,
  magnify,
  pageWhite,
  palette,
  play,
  productSong,
  productScore,
  productPersona,
  productArranger,
  productMaestro,
  productEgo,
  productOnco,
  productRiff,
  productMaestro,
  productJukebox,
  productBilling,
  productEnrolment,
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
  slack,
  vennDiagram,
}

export const Icon = ({ img, size, className, style }) => (
  <img
    className={`${className ? className : ''} Icon`}
    src={icons[img]}
    style={{ width: size, height: 'auto', ...style }}
  />
)

// Common Icon sets / groups

function Core() {
  return (
    <span className="Icons">
      <div className="core">
        <Icon className="" img="star" /> CORE{' '}
      </div>
    </span>
  )
}

export const IconCommon = {
  Core,
}
