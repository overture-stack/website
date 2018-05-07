// All them icons
import React from 'react'
import './styles.scss'
import security from './icons/security.svg'
import barGraph from './icons/bar_graph.svg'
import checkmark from './icons/checkmark.svg'
import cloud from './icons/cloud.svg'
import dna from './icons/dna.svg'
import download from './icons/download.svg'
import fingerSnap from './icons/finger_snap.svg'
import user from './icons/user.svg'
import target from './icons/target.svg'
import githubYellow from './icons/github_yellow.svg'
import githubWhite from './icons/github_white.svg'
import pageWhite from './icons/page_white.svg'
import rocketWhite from './icons/rocket_white.svg'

const icons = {
  security,
  barGraph,
  checkmark,
  cloud,
  dna,
  download,
  fingerSnap,
  user,
  target,
  githubYellow,
  githubWhite,
  pageWhite,
  rocketWhite,
}

const Icon = ({ img, size }) => (
  <img
    className="Icon"
    src={icons[img]}
    style={{ width: size, height: 'auto' }}
  />
)

export default Icon
