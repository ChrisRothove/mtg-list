export default function Paragraphy({text = ""}) {
  const splitText = text.split("\n");
  return (
    <>
      {splitText.map((para) => <p>{para}</p>)}
    </>
  )
}