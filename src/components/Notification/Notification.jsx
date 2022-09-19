
import 'react-notifications-component/dist/theme.css';
import { Store } from 'react-notifications-component';

const Notification = (msg, type) => {
  return Store.addNotification({
    message: msg,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 7000,
      onScreen: true,
    },
  });
};

export default Notification;
