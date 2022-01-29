import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import PortfolioSection from "../components/Portfolio";
import SkillsSection from "../components/SkillsSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <html class="light">
      <div className="dark:bg-background-dark">
        <Navbar />
        <HeroSection />
        <Overview />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <FooterSection />
      </div>
    </html>
  );
}
