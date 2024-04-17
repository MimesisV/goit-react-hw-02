import css from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendListItem({data: {name, avatar, isOnline}}) {
  return (
    <>
      <div>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
          {isOnline ? 'Online' : 'Ofline'}
        </p>
      </div>
    </>
  );
}
