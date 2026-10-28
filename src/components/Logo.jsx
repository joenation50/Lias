import logoImg from "../assets/logo.png";
import bannerImg from "../assets/banner.png";

export default function Logo({ size = 36, className = "", variant = "icon" }) {
  const src = variant === "banner" ? bannerImg : logoImg;

  return (
    <img
      src={src}
      alt="Lias Freight Global Services"
      style={{ height: size, width: "auto" }}
      className={`object-contain ${className}`}
    />
  );
}