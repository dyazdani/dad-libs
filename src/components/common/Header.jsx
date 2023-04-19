import Subheader from "./Subheader";

export default function Header({ pages, activePage }) {
  return (
    <header>
      <h1>Dad Libs</h1>
      <Subheader pages={pages} activePage={activePage}></Subheader>
    </header>
  );
}
