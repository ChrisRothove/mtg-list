type OpenDrawer = (b: boolean) => void;

interface HeaderProps {
  openDrawer?: OpenDrawer
}
export default function Header({openDrawer}: HeaderProps ) {
  return (
    <div className='banner'>
      <h1>Featherwalk's Custom Cards</h1>
      {openDrawer && <button onClick={() => openDrawer(true)}>
        Set
      </button>}
    </div>
  )
}