import { useEffect, useState } from "react";
import { elementScrollIntoView } from "seamless-scroll-polyfill";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { pageSelector } from "../../redux/slices/pageSlice";

import styles from './Header.module.css'

interface IScrollTo {
  children: JSX.Element|string;
  href: string;
}

const ScrollTo = ({children, href}: IScrollTo) => {
  return (
    <p className={styles.scroll_to} onClick={(e)=>{
      let scrollTo = document.getElementById(href)
      if(scrollTo !== null) {
        elementScrollIntoView(document.getElementById(href) as Element, { behavior: "smooth", block: "start", inline: "center" });
      }
    }}>{children}</p>
  )
}

export function Header() {
  const { scroll } = useAppSelector(pageSelector)

  return (
    <header className={styles.header} style={{backgroundColor:`rgba(65,65,65,${scroll/200})`}}>
      <div className={styles.link_container}>
        <ScrollTo href="home">Home</ScrollTo>
        <ScrollTo href="about">About</ScrollTo>
        <ScrollTo href="schedule">Schedule</ScrollTo>
        <ScrollTo href="faq">FAQ</ScrollTo>
        <ScrollTo href="sponsors">Sponsors</ScrollTo>
      </div>
    </header>
  )
}