import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Info from "./components/info";

export default function Page() {
  return (
      <main>
        <div id="app">
          <Header/>
          <Hero/>
          <Info/>
          </div>
      </main>
  );
}
