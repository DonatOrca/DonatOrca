import Modal from "../components/Modal";
import Constitution from "../components/Constitution";

import "../css/Dashboard.css";

import dashboard_img from "../assets/image/dashboard_img.png";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 flex-column justify-content-center">
            <div className="title">
              <h1 id="title-text">DONAT</h1>
              <h4 id="title-sub-text">
                DEVELOPERS OF NEXT ADVANCED TECHNOLOGY
              </h4>
            </div>
            <br />
            <h4 id="content-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              molestias ut aliquid quod quis voluptas quo qui, quasi ab dolorum
              veniam hic placeat, eveniet iste assumenda. Totam quo quas vitae.
            </h4>
            <br />
            <div
              className="bylaw w-100 ps-3 pe-3"
              data-bs-toggle="modal"
              data-bs-target="#constitutionModal"
            >
              <h4 id="bylaw">CONSTITUTION AND BY-LAWS</h4>
            </div>
          </div>
          <div className="col-lg-6 flex-column justify-content-center">
            <img
              src={dashboard_img}
              className="img-fluid"
              id="dashboard-img"
              alt="dashboard-img"
            />
          </div>
        </div>
      </div>
      <Modal header="CONSTITUTION AND BY-LAWS" id="constitutionModal">
        <Constitution />
      </Modal>
    </>
  );
}

export default Dashboard;
