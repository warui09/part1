import { useState } from "react";

const Heading = ({ text }) => {
  return <h2>{text}</h2>;
};

const Anecdote = ({ text, totalVotes }) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {totalVotes} votes</p>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const Winner = ({ anecdotes, votes }) => {
  const mostVotes = Math.max(...votes);
  const winnerIndex = votes.indexOf(mostVotes);
  const winner = anecdotes[winnerIndex];
  if (mostVotes !== 0) {
    return (
      <div>
        <p>{winner}</p>
        <p>has {mostVotes} votes</p>
      </div>
    );
  }
  return <p>no votes yet</p>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));
  const newVote = () => {
    const totalVotes = [...votes];
    totalVotes[selected] += 1;
    setVotes(totalVotes);
  };
  const nextAnecdote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));
  return (
    <div>
      <Heading text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} totalVotes={votes[selected]} />
      <Button onClick={newVote} text="vote" />
      <Button onClick={nextAnecdote} text="next anecdote" />
      <Heading text="Anecdote with most votes" />
      <Winner anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
