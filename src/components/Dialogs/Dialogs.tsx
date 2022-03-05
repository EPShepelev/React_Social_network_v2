import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDialog } from '../../store/Slice/dialogsSlice'
import { Dialog } from '../Dialog/Dialog'

export const Dialogs: React.FC = () => {
  const { dialogs } = useSelector((state: any) => state.dialogs)
  const dispatch = useDispatch()

  const [showDialog, setShowDialog] = useState(false)

  const showDialogToggle = () => {
    setShowDialog(!showDialog)
  }

  return (
    <>
      {dialogs.map((dialog: any) =>
        <div key={dialog.id} onClick={showDialogToggle}>
          <span>{dialog.userName}</span>
        </div>
      )}
      {showDialog && <Dialog/>}
      <div>
        <button>Create new dialog...</button>
      </div>
    </>
  )
}
