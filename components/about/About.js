import Link from 'next/link';

import React from 'react';

import Styles from './About.module.css';

function About() {
  return (
    <main className={Styles.main}>
      <div className={Styles.mainContainer}>
        <div className={Styles.item1}>
          <div className={Styles.heading}>
            About us
            <img src="img/line.svg" alt="" />
          </div>

          <div>
            <div className={Styles.title}>
              Know more about
              <br /> <span>Tech mahotsav &apos;23</span>
            </div>
            <p>
              The &quot;TECH MAHOTSAV,&quot; BIT Sindri&apos;s main technology
              festival, draws numerous attendees from various universities and
              colleges across the nation. It features many technical festivals,
              including coding competitions, development events, testing,
              exhibitions, and other thrilling activities. It offers a terrific
              platform where participants from all regions of the country have
              the chance to advance and display their technological expertise.
              On a single platform, participants demonstrate their management
              and technical talents.
            </p>
          </div>
        </div>
        <div className={Styles.item2}>
          <img className={Styles.image} src="img/logo.svg" alt="" />
        </div>
      </div>

      <div className={Styles.assoc}>
        <div className={Styles.title}>In Association With</div>
        <div className={Styles.imageTile}>
          <img src="img/hncc.svg" alt="" />
          <img src="img/iste.svg" alt="" />
          <img src="img/iete.svg" alt="" />
          <img src="img/model.svg" alt="" />
          <img src="img/sae.svg" alt="" />
        </div>
      </div>

      <div className={Styles.mainContainer}>
        <div className={Styles.bitItem}>
          <img className={Styles.image1} src="img/bit.svg" alt="" />
        </div>
        <div className={Styles.item1}>
          <div className={Styles.bitAbout}>
            <div>
              <div className={Styles.title}>About BIT Sindri</div>
              <p>
                We provide confirmation required to assure the quality, efficacy
                and safety of products. Our experienced scientific research team
                continuously involved in the process of developing novel
                nutraceutical health supplements and expand innovative
                formulations to address various healthcare needs. We thrive to
                providing highest quality, more affordable healthcare
                supplements for all, which will enrich your health and support
                modern lifestyle changes. Our experienced team is working
                continuously
              </p>
            </div>
            <div className={Styles.cardBtn}>
              <Link href="https://www.bitsindri.ac.in/" legacyBehavior>
                <button type="button">Know More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.innovation}>
        <div className={Styles.inovTitle}>Innovation Challenges</div>
        <div className={Styles.inovQuote}>
          &quot;Innovation is the calling card of the future&quot;
          <br /> ~ Anna Eshoo
        </div>
        <p>
          The themes and Problem Statements aim at accelerating research,
          development, and demonstration (RD&D) in technology areas that could
          provide significant benefits.
          <br />
          <br /> The future of a country lies in its students. The more
          innovative the youth is today, the better will be the country&apos;s
          future. Model Club is excited to announce the &quot;National Student
          Innovation Festival&quot; for college students irrespective of year or
          branch. Very meticulously designed, this challenge will give ample
          scope to all the changemakers to ponder over and solve some real-world
          needs. This innovation festival would surely be a window of
          opportunity for your crazy ideas to turn into reality and transform
          many lives.
        </p>
      </div>
      <div className={Styles.vision}>
        <div className={Styles.para}>
          To provide a niche platform to the budding technocrats, entrepreneurs
          and students from across the country to compete and showcase their
          skills & innovation, implement them for the betterment of the society
          and giving them an opportunity to meet the mentors and eminent
          personalities in their respective genres.
        </div>
        <div className={Styles.quote}>
          Vision
          <br /> & <br />
          Mission
        </div>
      </div>

      <div className={Styles.section}>
        <div className={Styles.first}>
          <div className={Styles.text}>Who can participate</div>
          <div className={Styles.text}>Team Composition</div>
          <div className={Styles.text}>Benefits to participants</div>
        </div>
        <div className={Styles.sec}>
          <div className={Styles.second}>
            <img src="img/borderLine.svg" alt="" />
          </div>
          <div className={Styles.third}>
            <div className={Styles.paraSection}>
              <ul>
                <li>
                  All the student currently pursuing education from recognized
                  institutes are allowed to take part in the event
                </li>
                <li>
                  All Engineering & Non-engineering undergraduates are allowed
                  to take part
                </li>
              </ul>
            </div>
            <div className={Styles.paraSection}>
              <ul>
                <li>
                  Group registration can be done with a maximum of five and a
                  minimum of two participants.
                </li>
                <li>
                  The platform is open to anyone who wants to present their
                  idea, regardless of their institute as well as branch
                  affiliation.
                </li>
                <li>
                  Teams should have a unique name and will be assigned a Team ID
                  for further communication and processces.
                </li>
              </ul>
            </div>
            <div className={Styles.paraSection}>
              <ul>
                <li>
                  Exploration of new scientific domains to drive business
                  innovation.
                </li>
                <li>
                  Finding talented individuals to work on development is a
                  priority.
                </li>
                <li>
                  The event provides students with the opportunity to evaluate
                  their skills, work in a team, and network for potential
                  employment opportunities while also promoting the brand to a
                  tech-savvy local audience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div id={Styles.timelineContent}>
      <div className={Styles.timeline}>
        <ul className={`${Styles.para1} ${Styles.paraT}`} data-desc="Who can participate">
            <li className={Styles.event}>All the student currently pursuing education from recognized institutes are allowed to take part in the event</li>
            <li className={Styles.event}>All Engineering & Non-engineering undergraduates are allowed to take part</li>
        </ul>
        <ul className={`${Styles.para2} ${Styles.paraT}`} data-desc="Team Composition">
            <li className={Styles.event}>All the student currently pursuing education from recognized institutes are allowed to take part in the event</li>
            <li className={Styles.event}>All Engineering & Non-engineering undergraduates are allowed to take part</li>
            <li className={Styles.event}>All Engineering & Non-engineering undergraduates are allowed to take part</li>
       </ul>
        <ul className={`${Styles.para3} ${Styles.paraT}`} data-desc="Benefits to participants">
            <li className={Styles.event}>All the student currently pursuing education from recognized institutes are allowed to take part in the event</li>
            <li className={Styles.event}>All Engineering & Non-engineering undergraduates are allowed to take part</li>
            <li className={Styles.event}>All Engineering & Non-engineering undergraduates are allowed to take part</li>
        </ul>
        </div>
    </div> */}
    </main>
  );
}

export default About;
