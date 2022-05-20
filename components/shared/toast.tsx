import { Dialog } from '../shared/dialog/dialog';
import Panel from '../shared/panel';

interface ToastProps extends ReactProps {
  isOpen: boolean;
  content: string;
  onClose?: () => any
}
const Toast: React.FC<ToastProps> = ({
  isOpen,
  content,
  onClose
}: ToastProps) => {

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      slideFromBottom="none"
    >
      <Panel className="w-max">
        <div className="dark:text-white">{content}</div>
      </Panel>
    </Dialog>
  )
}
export default Toast;
