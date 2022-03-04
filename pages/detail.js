import Header from "../components/header";
import NextLink from "next/link";

export default function Detail() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="container">
          <div className="style-content-3-a">
            — <strong>DETAIL ASURANSI</strong> —
          </div>
          <div className="style-detail">
            <div className="style-detail-a">Asuransi Jiwa A</div>
            <div className="style-detail-b">
              Asuransi Jiwa A adalah bentuk perjanjian antara kedua belah pihak,
              yaitu Tertanggung dan Penanggung, di mana Tertanggung membayar
              sebuah iuran kepada Penanggung demi mendapatkan bentuk ganti rugi
              atas risiko finansial yang dapat terjadi secara tak terduga.
            </div>
            <div className="style-detail-a">Asuransi Jiwa B</div>
            <div className="style-detail-b">
              Asuransi Jiwa B adalah bentuk perjanjian antara kedua belah pihak,
              yaitu Tertanggung dan Penanggung, di mana Tertanggung membayar
              sebuah iuran kepada Penanggung demi mendapatkan bentuk ganti rugi
              atas risiko finansial yang dapat terjadi secara tak terduga.
            </div>
            <div className="style-detail-a">Asuransi Jiwa C</div>
            <div className="style-detail-b">
              Asuransi Jiwa C adalah bentuk perjanjian antara kedua belah pihak,
              yaitu Tertanggung dan Penanggung, di mana Tertanggung membayar
              sebuah iuran kepada Penanggung demi mendapatkan bentuk ganti rugi
              atas risiko finansial yang dapat terjadi secara tak terduga.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
