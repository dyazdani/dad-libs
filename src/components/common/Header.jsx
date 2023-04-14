import Subheader from "./Subheader";

export default function Header({ pages, activePage }) {
  return (
    <>
      <h2>Dad Libs</h2>
      <Subheader pages={pages} activePage={activePage}></Subheader>
    </>
  );
}
