import Styles from './Model.module.css';

function Model() {
  return (
    <div className={Styles.modelBg}>
      <div className={Styles.modelBox}>
        <div className={Styles.modelCloseBtn}>+</div>
        <form>
          <div className={Styles.teamName}>
            <div className={Styles.th}>Team Name</div>
            <input type="text" placeholder="Team Name*" />
          </div>
          <div className={Styles.teamMemberBox}>
            <div className={Styles.teamMember}>
              <div className={Styles.teamMemberHeading}>Team Leader</div>
              <div className={Styles.teamMemberTop}>
                <input type="text" placeholder="Name*" />
                <select>
                  <option value="gender">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input type="number" placeholder="Phone*" />
              </div>
              <div className={Styles.teamMemberBottom}>
                <input type="email" placeholder="Email Id*" />
                <input type="number" placeholder="Whatsapp Number*" />
              </div>
            </div>
            <div className={Styles.teamMember}>
              <div className={Styles.teamMemberHeading}>Member 2</div>
              <div className={Styles.teamMemberTop}>
                <input type="text" placeholder="Name*" />
                <select>
                  <option value="gender">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input type="number" placeholder="Phone*" />
              </div>
              <div className={Styles.teamMemberBottom}>
                <input type="email" placeholder="Email Id*" />
                <input type="number" placeholder="Whatsapp Number*" />
              </div>
            </div>
            <div className={Styles.teamMember}>
              <div className={Styles.teamMemberHeading}>Member 3</div>
              <div className={Styles.teamMemberTop}>
                <input type="text" placeholder="Name*" />
                <select>
                  <option value="gender">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input type="number" placeholder="Phone*" />
              </div>
              <div className={Styles.teamMemberBottom}>
                <input type="email" placeholder="Email Id*" />
                <input type="number" placeholder="Whatsapp Number*" />
              </div>
            </div>
            <div className={Styles.teamMember}>
              <div className={Styles.teamMemberHeading}>Member 4</div>
              <div className={Styles.teamMemberTop}>
                <input type="text" placeholder="Name*" />
                <select>
                  <option value="gender">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input type="number" placeholder="Phone*" />
              </div>
              <div className={Styles.teamMemberBottom}>
                <input type="email" placeholder="Email Id*" />
                <input type="number" placeholder="Whatsapp Number*" />
              </div>
            </div>
          </div>
          <input type="submit" value="Register" className={Styles.regBtn} />
        </form>
      </div>
    </div>
  );
}

export default Model;
