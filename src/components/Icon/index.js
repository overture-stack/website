// All them icons
import React from 'react';
import './styles.scss';

import arrowDown from './icons/arrow_down.svg';
import arrowLeftBlue from './icons/arrow-left-blue.svg';
import arrowLeftRound from './icons/arrow_left_round.svg';
import arrowRight from './icons/arrow_right.svg';
import arrowRightMagenta from './icons/arrow_right_magenta.svg';
import arrowRightRound from './icons/arrow_right_round.svg';
import arrowsRight from './icons/arrows_right.svg';
import barGraph from './icons/bar_graph.svg';
import cardStack from './icons/card_stack.svg';
import checkmark from './icons/checkmark.svg';
import chevronGrey from './icons/chevron-grey.svg';
import chevronMagenta from './icons/chevron-magenta.svg';
import cloud from './icons/cloud.svg';
import cloudSquare from './icons/cloud_square.svg';
import copy from './icons/copy.svg';
import customizable from './icons/customizable.svg';
import database from './icons/database.svg';
import dna from './icons/dna.svg';
import download from './icons/download.svg';
import extensible from './icons/extensible.svg';
import fingerSnap from './icons/finger_snap.svg';
import githubGrey from './icons/github_grey.svg';
import githubMagenta from './icons/github_magenta.svg';
import githubWhite from './icons/github_white.svg';
import githubYellow from './icons/github_yellow.svg';
import graphCycle from './icons/graph_cycle.svg';
import gridGlass from './icons/grid_magnifying_glass.svg';
import history from './icons/history.svg';
import kafka from './icons/kafka.svg';
import lock from './icons/lock.svg';
import lockCode from './icons/lock_code.svg';
import magnify from './icons/magnify.svg';
import mail from './icons/mail.png';
import notes from './icons/notes.svg';
import pageWhite from './icons/page_white.svg';
import palette from './icons/palette.svg';
import play from './icons/play.svg';
import power from './icons/power.svg';
import productArranger from './icons/productArranger.svg';
import productArrangerWhite from './icons/productArrangerWhite.svg';
import productBilling from './icons/productBilling.svg';
import productBillingWhite from './icons/productBillingWhite.svg';
import productDMS from './icons/productDMS.svg';
import productDMSWhite from './icons/productDMSWhite.svg';
import productEgo from './icons/productEgo.svg';
import productEgoWhite from './icons/productEgoWhite.svg';
import productEnrolment from './icons/productEnrolment.svg';
import productEnrolmentWhite from './icons/productEnrolmentWhite.svg';
import productJukebox from './icons/productJukebox.svg';
import productJukeboxWhite from './icons/productJukeboxWhite.svg';
import productMaestro from './icons/productMaestro.svg';
import productMaestroWhite from './icons/productMaestroWhite.svg';
import productOnco from './icons/productOnco.svg';
import productOncoWhite from './icons/productOncoWhite.svg';
import productPersona from './icons/productPersona.svg';
import productPersonaWhite from './icons/productPersonaWhite.svg';
import productRiff from './icons/productRiff.svg';
import productRiffWhite from './icons/productRiffWhite.svg';
import productScore from './icons/productScore.svg';
import productScoreWhite from './icons/productScoreWhite.svg';
import productSong from './icons/productSong.svg';
import productSongWhite from './icons/productSongWhite.svg';
import rocketWhite from './icons/rocket_white.svg';
import search from './icons/search.svg';
import searchBar from './icons/searchBar.svg';
import security from './icons/security.svg';
import share from './icons/share.svg';
import shield from './icons/shield.svg';
import slack from './icons/icon-slack.svg';
import spiral from './icons/spiral.svg';
import star from './icons/star.svg';
import target from './icons/target.svg';
import user from './icons/user.svg';
import vennDiagram from './icons/venn_diagram.svg';
import xGrey from './icons/x-grey.svg';

const icons = {
  arrowDown,
  arrowLeftBlue,
  arrowLeftRound,
  arrowRight,
  arrowRightMagenta,
  arrowRightRound,
  arrowsRight,
  barGraph,
  cardStack,
  checkmark,
  chevronGrey,
  chevronMagenta,
  cloud,
  cloudSquare,
  copy,
  customizable,
  database,
  dna,
  download,
  extensible,
  fingerSnap,
  githubGrey,
  githubMagenta,
  githubWhite,
  githubYellow,
  graphCycle,
  gridGlass,
  history,
  kafka,
  lock,
  lockCode,
  magnify,
  mail,
  notes,
  pageWhite,
  palette,
  play,
  power,
  productArranger,
  productArrangerWhite,
  productBilling,
  productBillingWhite,
  productDMS,
  productDMSWhite,
  productEgo,
  productEgoWhite,
  productEnrolment,
  productEnrolmentWhite,
  productJukebox,
  productJukeboxWhite,
  productMaestro,
  productMaestro,
  productMaestroWhite,
  productMaestroWhite,
  productOnco,
  productOncoWhite,
  productPersona,
  productPersonaWhite,
  productRiff,
  productRiffWhite,
  productScore,
  productScoreWhite,
  productSong,
  productSongWhite,
  rocketWhite,
  search,
  searchBar,
  security,
  share,
  shield,
  slack,
  spiral,
  star,
  target,
  user,
  vennDiagram,
  xGrey,
};

export const Icon = ({ alt = '', img, size, className, style }) => (
  <img
    alt={alt}
    className={`${className ? className : ''} Icon`}
    src={icons[img]}
    style={{ width: size, height: 'auto', ...style }}
  />
);

// Common Icon sets / groups

function Core() {
  return (
    <span className="Icons">
      <div className="core">
        <Icon className="" img="star" alt="" /> CORE{' '}
      </div>
    </span>
  );
}

export const IconCommon = {
  Core,
};
