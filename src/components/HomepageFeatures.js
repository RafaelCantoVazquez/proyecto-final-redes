import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Programa con sockets',
    Svg: require('../../static/img/undraw_mind_map_re_nlb6.svg').default,
    description: (
      <>
        Aprendamos un poco más sobre la programación de aplicaciones con
        sockets.
      </>
    ),
  },
  {
    title: 'Asegura los datos en una red',
    Svg: require('../../static/img/undraw_two_factor_authentication_namy.svg')
      .default,
    description: (
      <>Conozcamos sobre la seguridad en la comunicación de datos en una red.</>
    ),
  },
  {
    title: 'Siéntete seguro en la Web',
    Svg: require('../../static/img/undraw_security_re_a2rk.svg').default,
    description: <>Indaguemos más sobre la seguridad en la web.</>,
  },
  {
    title: 'IoT',
    Svg: require('../../static/img/undraw_circuit_board_4c4d.svg').default,
    description: <>Entendamos qué es el Internet de las Cosas.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
