function AdminEventCard() {
  return (
    <div className="adminEventCard">
      <img src="img/e1.png" alt="" />
      <h2>Spider 3.0</h2>
      <div className="closeBtn">
        <input type="checkbox" />
        <span>Close Registration</span>
      </div>
      <div className="deleteBtn">D</div>
      <div className="editBtn">E</div>
      <div className="bottomBtn">Download Response</div>
    </div>
  );
}

export default AdminEventCard;
