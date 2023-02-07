import Link from 'next/link';

function Card() {
  return (
    <div className="eventCard">
      <img src="img/e1.png" alt="" />
      <div className="eventheading">Spider 3.0</div>
      <div className="des">
        <span>lorem ipsum doler sit amet</span>
        <span>
          By <b>ISTE</b>
        </span>
      </div>
      <div className="prize">
        <span>Prizes Worth</span>
        <div className="prizeheading">INR 19500</div>
      </div>
      <div className="cardBtn">
        <Link href="/EventsPage" legacyBehavior>
          <button type="button">Know More</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
