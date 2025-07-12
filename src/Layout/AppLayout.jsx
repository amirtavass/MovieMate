import NavBar from "./NavBar";

function AppLayout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default AppLayout;
