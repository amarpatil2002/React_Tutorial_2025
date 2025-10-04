const Displaydata = () => {
  const userDetails = [
    {
      id: 101,
      name: "Amarjit",
      age: "23",
      gender: "male",
      college: "KBPM",
    },
    {
      id: 102,
      name: "Shankar",
      age: "25",
      gender: "male",
      college: "DU",
    },
    {
      id: 103,
      name: "Sanket",
      age: "23",
      gender: "male",
      college: "KBPM",
    },
  ];

  return (
    <>
      <h2>Display User Data using Map</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>College</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((item) => (
            <tr key={item.id} >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.college}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Displaydata;
