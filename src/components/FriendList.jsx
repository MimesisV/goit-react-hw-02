import FriendListItem from './FriendListItem'

export default function FriendList({ data }) {
  return (
    <>
      <ul>
        {data.map((element) => (
          <li key={element.id}>
            <FriendListItem data={element}/>
          </li>
        ))}
      </ul>
    </>
  );
}
