import logoImage from "@assets/AE990F09-C55F-445A-AE33-361BA27C0C43_1752271442098.png";

export default function Logo() {
  return (
    <img 
      src={logoImage} 
      alt="4Under Logo" 
      className="h-14 sm:h-16 lg:h-18 w-auto"
    />
  );
}
