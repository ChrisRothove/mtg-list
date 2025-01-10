export default function ManaSymbols({ cost = "" }) {
  const cleanSymbols = cost.replaceAll("{", "").replaceAll("}", "");
  console.log(cleanSymbols)
  const symbols = cleanSymbols.split("");
  return (
    <div className="card-cost">
      {symbols.map((symbol: string) => <div className="mana-symbol">
        <p>{symbol}</p>
      </div>)}
    </div>
  )
}