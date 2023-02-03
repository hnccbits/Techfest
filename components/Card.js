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
      <div className="cardBtn">Know More</div>
    </div>
  );
}

export default Card;
