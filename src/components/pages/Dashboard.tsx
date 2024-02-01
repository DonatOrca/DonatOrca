import useMediaQuery from "../useMediaQuery";

import Modal from "../Modal";
import Constitution from "./Constitution";

import "../css/Dashboard.css";

import bg from "../../assets/svg/dashboard_bg.svg";
import de from "../../assets/image/dashboard_img.png";

function Dashboard() {
  const matches = useMediaQuery("(min-width: 1600px)");

  return (
    <>
      {matches ? (
        <>
          <img src={bg} id="dashboard-bg" alt="dashboard-bg" />
        </>
      ) : (
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum molestias ut aliquid quod quis voluptas quo qui, quasi
                  ab dolorum veniam hic placeat, eveniet iste assumenda. Totam
                  quo quas vitae.
                </h4>
                <br />
                <div className="bylaw" data-bs-toggle="modal" data-bs-target="#constitutionModal">
                  <h4 id="bylaw">BY LAWS AND CONSTITUTION</h4>
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <img src={de} className="img-fluid" alt="dashboard-img" />
              </div>
            </div>
          </div>
        </>
      )}
      <Modal id="constitutionModal">
        <Constitution />
      </Modal>
    </>
  );
}

export default Dashboard;
