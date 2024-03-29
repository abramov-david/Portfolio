import Grid from "@material-ui/core/Grid";
import styles from "../styles/home_styles.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const [active, setActive] = useState(false);
  const [animationBurger, setAnimationBurger] = useState(false);
  const router = useRouter();
  function toggleClick() {
    setActive(!active);
    setAnimationBurger(false);
  }
  return (
    <div className={styles.page}>
      <div className={styles.fixedNav}>
        <div className={styles.mainNavbarContent}>
          <header className={styles.header}>
            <nav className={styles.navbar}>
              <div className={styles.navLogo}>
                <Link href="/"> Portfolio 2022</Link>
              </div>
              <ul className={active ? styles.navMenuActive : styles.navMenu}>
                <li className={styles.navItemActive}>
                  <div
                    className={
                      router.pathname == "/home"
                        ? styles.navLinkActive
                        : styles.navLink
                    }
                  >
                    <Link href="/home">
                      <a>Home</a>
                    </Link>
                  </div>
                </li>
                <li
                  className={
                    router.pathname == "/study"
                      ? styles.navItemActive
                      : styles.navItem
                  }
                >
                  <div
                    className={
                      router.pathname == "/study"
                        ? styles.navLinkActive
                        : styles.navLink
                    }
                  >
                    <Link href="/study">
                      <a>Study</a>
                    </Link>
                  </div>
                </li>
                <li
                  className={
                    router.pathname == "/design"
                      ? styles.navItemActive
                      : styles.navItem
                  }
                >
                  <div
                    className={
                      router.pathname == "/design"
                        ? styles.navLinkActive
                        : styles.navLink
                    }
                  >
                    <Link href="/design">
                      <a>Design</a>
                    </Link>
                  </div>
                </li>
                <li
                  className={
                    router.pathname == "/contacts"
                      ? styles.navItemActive
                      : styles.navItem
                  }
                >
                  <div
                    className={
                      router.pathname == "/contacts"
                        ? styles.navLinkActive
                        : styles.navLink
                    }
                  >
                    <Link href="/contacts">
                      <a>Contacts</a>
                    </Link>
                  </div>
                </li>
              </ul>
              <div
                onClick={toggleClick}
                className={active ? styles.hamburgerActive : styles.hamburger}
              >
                <span
                  className={active ? styles.hamburgerLineFirst : styles.bar1}
                ></span>
                <span
                  className={active ? styles.hamburgerLineSecond : styles.bar2}
                ></span>
                <span
                  className={active ? styles.hamburgerLineThird : styles.bar3}
                ></span>
              </div>
            </nav>
          </header>
        </div>
      </div>
      <div className={styles.mainHomeContent}>
        <Grid
          container
          className={styles.gridContainer}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} lg={5} xl={5} sm={6}>
            <img className={styles.image} src="/images/portret.jpg" />
          </Grid>
          <Grid item md={6} lg={6} sm={10} className={styles.textBox}>
            <div className={styles.title}>PORTFOLIO</div>
            <div className={styles.welcome}>Hi..</div>
            <div className={styles.text}>
              {" "}
              My name is David Abramov and i'm Frontend developer with about 2
              years of expirience. <br />
              This portfolio-site i created to tell about myself and my
              knowledges and possibly arouse your interest in cooperating with
              me on your projects.
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
