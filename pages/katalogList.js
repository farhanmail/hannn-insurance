import Header from "../components/header";
import NextLink from "next/link";

export default function KatalogList() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="container">
          <div className="style-content-3-a">
            — <strong>LIST ASURANSI</strong> —
          </div>
          <form className="style-form d-flex flex-row-reverse">
            <div className="row">
              <div className="col-auto">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col">
              <NextLink href="/detail">
                <div className="content-item">
                  <div className="item-box">
                    <div className="style-content-item-a">Asuransi</div>
                    <div className="style-content-item-b">Jiwa</div>
                    <div className="style-content-item-c">
                      Mempermudah anda dalam mengurus segala macam asuransi
                    </div>
                  </div>
                </div>
              </NextLink>
            </div>
            <div className="col">
              <NextLink href="/detail">
                <div className="content-item">
                  <div className="item-box">
                    <div className="style-content-item-a">Asuransi</div>
                    <div className="style-content-item-b">Kendaraan</div>
                    <div className="style-content-item-c">
                      Mempermudah anda dalam mengurus segala macam asuransi
                    </div>
                  </div>
                </div>
              </NextLink>
            </div>
            <div className="col">
              <NextLink href="/detail">
                <div className="content-item">
                  <div className="item-box">
                    <div className="style-content-item-a">Asuransi</div>
                    <div className="style-content-item-b">Kesehatan</div>
                    <div className="style-content-item-c">
                      Mempermudah anda dalam mengurus segala macam asuransi
                    </div>
                  </div>
                </div>
              </NextLink>
            </div>
            <div className="col">
              <NextLink href="/detail">
                <div className="content-item">
                  <div className="item-box">
                    <div className="style-content-item-a">Asuransi</div>
                    <div className="style-content-item-b">Properti</div>
                    <div className="style-content-item-c">
                      Mempermudah anda dalam mengurus segala macam asuransi
                    </div>
                  </div>
                </div>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
