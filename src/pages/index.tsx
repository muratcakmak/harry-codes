import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Harry Codes
        </Heading>
        <p
          className="hero__subtitle"
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            margin: "2rem 0",
          }}
        >
          Magical Coding for Wizards
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/preface"
          >
            Start the Book of Spells
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Welcome to Harry Codes`}
      description="A magical journey into coding, inspired by Harry Potter!"
    >
      <HomepageHeader />
    </Layout>
  );
}
