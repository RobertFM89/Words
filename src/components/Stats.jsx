
const Stats = ({stats}) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words"/>
      <Stat number={stats.numberOfCharacters} label="Characters"/>
      <Stat number={280-(stats.numberOfCharacters)} label="Instagram"/>
      <Stat number={140-(stats.numberOfCharacters)} label="Twitter"/>
    </section>
  )
}
function Stat({number, label}) {
  return(
    <section className="stat">
        <span className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
        <h3 className="second-heading">{label}</h3>
      </section>
  )
}

export default Stats
