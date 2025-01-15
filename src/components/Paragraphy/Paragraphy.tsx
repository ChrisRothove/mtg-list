export default function Paragraphy({text = ""}) {
  const splitText = text.split("\n");
  const getKey = (para: string) => para[0] + para[5];
  console.log(getKey(splitText[0]))
  return (
    <>
      {splitText.map((para, index: number) => <p key={getKey(para) + index}>{para}</p>)}
    </>
  )
}