export default function Allergies({ data }) {
  const env = data.environmental;
  const food = data.food;

  const displayLevels = (x) => {
    switch (x) {
      case "level_1":
        return ["Level 1", env[x].description.toString(), env[x].items];
      case "level_2":
        return ["Level 2", env[x].description.toString(), env[x].items];
      case "level_3":
        return ["Level 3", env[x].description.toString(), env[x].items];
      default:
        return ["Normal", env[x].description.toString(), env[x].items];
    }
  };

  return (
    <>
      <h1>Environmental Allergies</h1>
      {Object.keys(env).map((a) => {
        return (
          <div key={a}>
            <h2>{displayLevels(a)[0]}</h2>
            <p>{displayLevels(a)[1]}</p>
            <ul>
              {displayLevels(a)[2].map((b) => {
                return <li key={b}>{b}</li>;
              })}
            </ul>
          </div>
        );
      })}

      <h1>Food Allergies</h1>
      {Object.keys(food).map((a) => {
        // return <p key={a}>{displayLevels(a)}</p>
        return (
          <div key={a}>
            <h2>{displayLevels(a)[0]}</h2>
            <p>{displayLevels(a)[1]}</p>
            <ul>
              {displayLevels(a)[2].map((b) => {
                return <li key={b}>{b}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
