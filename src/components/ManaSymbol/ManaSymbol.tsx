interface ManaSymbolsProps {
  cost: string,
  isVertical?: boolean
}

export default function ManaSymbols(
  { cost = "", isVertical = false }: ManaSymbolsProps
) {
  const cleanSymbols = cost.replaceAll("{", "").replaceAll("}", "");
  const className =
    isVertical ? "card-cost" : "card-cost horizontal";
  const symbols = cleanSymbols.split("");
  return (
    <div className={className}>
      {symbols.map((symbol: string, index: number) => <div key={symbol + index} className='mana-symbol'>
        <p>{symbol}</p>
      </div>)}
    </div>
  )
}