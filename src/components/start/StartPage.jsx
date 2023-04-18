export default function StartPage({ handleClick }) {
  return (
    <div className="cta">
      <button className="cta-button" type="button" onClick={handleClick}>
        Start Adding Words!
      </button>
    </div>
  );
}
