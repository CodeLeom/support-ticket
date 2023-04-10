import { useSelector } from "react-redux"

function NoteItem({note}) {
    const {user} = useSelector((state) => state.auth)
  return (
    <div className="note" style={{backgroundColor: note.isStaff ? '#3178C6' : '#ff7f50', color: note.isStaff ? '#000' : '#fff'}}>
        <h3>
            Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
        </h3>
        <p>{note.text}</p>
        <div className="note-date">
            {new Date(note.createdAt).toLocaleString('en-US')}
        </div>
    </div>
  )
}

export default NoteItem
