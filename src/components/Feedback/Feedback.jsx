export default function Feedback({data :{good, neutral, bad}, total, positive}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Good: {positive}%</p>
    </div>
  );
}
