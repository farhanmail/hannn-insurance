import Image from "next/image";
import Header from "../components/header";
import Bg from "../assets/img/Background-asuransi.jpg";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="content-1">
          <h1 className="style-content-1">
            <span className="style-content-1-a">HANNN</span> Insurance
          </h1>
          <div className="container">
            <div className="style-content-1-b">
              Mempermudah anda dalam mengurus
            </div>
            <div className="style-content-1-b">segala macam asuransi</div>
          </div>
        </div>
        <div className="container">
          <div className="style-content-2">
            <div className="row">
              <div className="col">
                <div className="style-content-2-a">
                  APA ITU <span className="style-content-2-b"> ASURANSI </span>{" "}
                  ?
                </div>
              </div>
              <div className="col">
                <div className="style-content-2-c">
                  Asuransi adalah bentuk perjanjian antara kedua belah pihak,
                  yaitu Tertanggung dan Penanggung, di mana Tertanggung membayar
                  sebuah iuran kepada Penanggung demi mendapatkan bentuk ganti
                  rugi atas risiko finansial yang dapat terjadi secara tak
                  terduga.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="style-content-3">
          <div className="container">
            <div className="style-content-3-a">
              — Manfaat <strong>ASURANSI</strong> —
            </div>
            <div className="style-content-3-b">
              Fungsi Asuransi yang utama adalah untuk membantu kamu mengatasi
              risiko tak terduga dalam hidup. Asuransi memang tidak menjamin
              bahwa risiko tersebut akan hilang, tapi setidaknya kamu bisa
              meminimalisir kerugian finansial yang dialami akibat risiko
              tersebut.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
