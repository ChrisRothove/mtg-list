import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CloseDrawer = (b: boolean) => void
interface DrawerProps {
  open: boolean,
  closeDrawer: CloseDrawer,
  children?: React.ReactNode
}

export default function Drawer({open, closeDrawer, children}: DrawerProps) {
  const classes = open ? "drawer open" : "drawer closed";

  return (
    <nav className={classes}>
      <div className="banner">
        <button onClick={() => closeDrawer(false)}><FontAwesomeIcon icon={faX} /></button>
        <h1>Set Details</h1>
      </div>
      {children}
    </nav>
  )
}