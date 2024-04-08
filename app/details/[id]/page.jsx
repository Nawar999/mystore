import React from "react";
import Image from "next/image";
import "../../styles/details.css";
const imgurl =
  "https://res.cloudinary.com/dfa0wk4u1/image/upload/v1712371823/iptv_jvp7gf.png";
export default function ProductDetailsPage() {
  return (
    <div className="details">
      <Image
        src="https://res.cloudinary.com/dfa0wk4u1/image/upload/v1712371823/iptv_jvp7gf.png"
        alt="image"
        width={500}
        height={500}
      />
      <section>
        <h1>يوتيوب بريميوم</h1>
        <div className="price">
          <h2>69 ر.س</h2>
          <h3>288 ر.س</h3>
        </div>
        <p>مميزات</p>
        <p>تقدر تشاهد اليوتيوب بدون اعلانات</p>
      </section>
    </div>
  );
}
