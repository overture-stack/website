// All them icons
import React from 'react'
import './styles.scss'
import security from './icons/security.png'
import barGraph from './icons/bar_graph.png'
import checkmark from './icons/checkmark.png'
import cloud from './icons/cloud.png'
import dna from './icons/dna.png'
import download from './icons/download.png'
import fingerSnap from './icons/finger_snap.png'
import user from './icons/user.png'
import target from './icons/target.png'
import githubYellow from './icons/github_yellow.png'
import githubWhite from './icons/github_white.png'
import pageWhite from './icons/page_white.png'
import rocketWhite from './icons/rocket_white.png'

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
