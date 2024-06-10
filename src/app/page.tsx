import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@src/components/heroSection/Slider";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export default function Home() {
  return (
    <main className={styles.main}>
   <Slider/>
    </main>
  );
}
