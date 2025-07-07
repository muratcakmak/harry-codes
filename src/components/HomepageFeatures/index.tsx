import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Spellbindingly Easy",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg")
      .default,
    description: (
      <>
        Harry Codes is designed for young wizards to start their magical
        coding journey with ease. No prior magic required!
      </>
    ),
  },
  {
    title: "Focus on Wizardry",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Focus on learning spells (code) and charms (logic), while we
        handle the Muggle chores. Move your magical notes into the{" "}
        <code>book</code> directory.
      </>
    ),
  },
  {
    title: "Powered by Magic & React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg")
      .default,
    description: (
      <>
        Extend or customize your magical site layout by reusing React.
        Harry Codes can be extended while reusing the same enchanted
        header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
