import Header from "../components/header";
import NextLink from "next/link";

export default function CreateInsurance() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="container">
          <div className="style-manage-content">
            — <strong>MANAGE ASURANSI</strong> —
          </div>
          <form className="style-form">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">Nama Asuransi</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">Keterangan</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Detail</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
