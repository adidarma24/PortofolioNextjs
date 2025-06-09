import Footer from "@/components/Footer";

export const metadata = {
  title: "AdiDharma | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
