import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import panorama from "/img/panorama.jpg";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{display: "flex", justifyContent: "center", gap: "2em"}}>
          <div className={styles.buttons}>
            <a
              className="button button--secondary button--lg"
              href="/pdf/italian.pdf"
            >
              Italian Report 🇮🇹
            </a>
          </div>
          <div className={styles.buttons}>
            <a
              className="button button--secondary button--lg"
              href="/pdf/english.pdf"
            >
              English Report 🇬🇧
            </a>
          </div>
          <div className={styles.buttons}>
            <a
              className="button button--secondary button--lg"
              href="/pdf/presentation.pdf"
            >
              Presentation 🎓
            </a>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Get Started 📚
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <img src={panorama} alt="Panorama" />
      </main>
    </Layout>
  );
}
