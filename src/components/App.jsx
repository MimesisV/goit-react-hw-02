import Profile from './Profile';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
}
