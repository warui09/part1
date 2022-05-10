import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  if (text !== "positive") {
    return (
      <>
        <td>{text}</td>
        <td>{value}</td>
      </>
    );
  }
  return (
    <>
      <td>{text}</td>
      <td>{value} %</td>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutal = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);
  const increaseAll = () => setAll(all + 1);

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        onClick={() => {
          increaseGood();
          increaseAll();
        }}
        text="good"
      ></Button>
      <Button
        onClick={() => {
          increaseNeutal();
          increaseAll();
        }}
        text="neutral"
      ></Button>
      <Button
        onClick={() => {
          increaseBad();
          increaseAll();
        }}
        text="bad"
      ></Button>
      <h2>statistics</h2>

      {all !== 0 ? (
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StatisticLine text="all" value={all} />
            </tr>
            <tr>
              <StatisticLine
                text="average"
                value={parseFloat((good - bad) / all).toFixed(1)}
              />
            </tr>
            <tr>
              <StatisticLine
                text="positive"
                value={parseFloat((good * 100) / all).toFixed(1)}
              />
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
