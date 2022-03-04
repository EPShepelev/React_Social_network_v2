import { useSelector, useDispatch } from 'react-redux'
import { addDialog } from '../../store/Slice/dialogsSlice'

export const Dialogs: React.FC = () => {
  const { dialogs } = useSelector((state: any) => state.dialogs)
  const dispatch = useDispatch()

  return (
    dialogs.map((dialog: any) =>
      <div key={dialog.id}>
        <span>{dialog.userName}</span>
      </div>
    )
  )
}
