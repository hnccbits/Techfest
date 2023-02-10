import Styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.about}>
        <div className={Styles.heading}>
          About us <img src="img/line.svg" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nisl in facilisis ultrices
          rhoncus maecenas. Augue nunc gravida risus blandit mattis eget quam.{' '}
        </p>
      </div>
      <div className={Styles.events}>
        <div className={Styles.heading}>
          Events <img src="img/line.svg" alt="" />
        </div>
        <ul>
          <li>Workshop</li>
          <li>Speaker</li>
          <li>Competition</li>
        </ul>
      </div>
      <div className={Styles.contact}>
        <div className={Styles.heading}>
          Contact us <img src="img/line.svg" alt="" />
        </div>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
}
