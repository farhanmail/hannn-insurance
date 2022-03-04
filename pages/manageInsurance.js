import Header from "../components/header";
import NextLink from "next/link";

export default function ManageInsurance() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="container">
          <div className="style-manage-content">
            — <strong>LIST ASURANSI</strong> —
          </div>
          <div className="button-create">
            <NextLink href="createInsurance">
              <button className="btn btn-primary">Create New</button>
            </NextLink>
          </div>
          <div>
            <NextLink href="/manageInsurance/update/1">
              <div className="manage-content">
                <div className="style-content-item-a">
                  Asuransi <span>Jiwa</span>
                </div>
                <div className="style-content-item-c">
                  Mempermudah anda dalam mengurus segala macam asuransi
                </div>
              </div>
            </NextLink>
          </div>
          <div>
            <NextLink href="/manageInsurance/update/1">
              <div className="manage-content">
                <div className="style-content-item-a">
                  Asuransi <span>Kendaraan</span>
                </div>
                <div className="style-content-item-c">
                  Mempermudah anda dalam mengurus segala macam asuransi
                </div>
              </div>
            </NextLink>
          </div>
          <div>
            <NextLink href="/manageInsurance/update/1">
              <div className="manage-content">
                <div className="style-content-item-a">
                  Asuransi <span>Kesehatan</span>
                </div>
                <div className="style-content-item-c">
                  Mempermudah anda dalam mengurus segala macam asuransi
                </div>
              </div>
            </NextLink>
          </div>
          <div>
            <NextLink href="/manageInsurance/update/1">
              <div className="manage-content">
                <div className="style-content-item-a">
                  Asuransi <span>Properti</span>
                </div>
                <div className="style-content-item-c">
                  Mempermudah anda dalam mengurus segala macam asuransi
                </div>
              </div>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
