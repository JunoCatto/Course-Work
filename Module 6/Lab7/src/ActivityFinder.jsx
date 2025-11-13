import { useState, useEffect } from "react";
function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [type, setType] = useState("");
  const [activity, setActivity] = useState("");
  const [activity2, setActivity2] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const activityTypes = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bored.api.lewagon.com/api/activity?" +
        "participants=" +
        participants
    )
      .then((response) => response.json())
      .then((json) => {
        setActivity(json.activity);
        setIsLoading(false);
      });
  }, [participants]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://bored.api.lewagon.com/api/activity?" + "type=" + type)
      .then((response) => response.json())
      .then((json) => {
        setActivity2(json.activity);
        setIsLoading(false);
      });
  }, [type]);
  return (
    <>
      <div className="ActivityFinder componentBox">
        <h3>Activity Finder</h3>
        <label>
          Choose number of participants:
          <select
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <div>
          <strong>Suggested Activity: </strong>
          {isLoading ? "Loading..." : activity}
        </div>
      </div>
      <div className="ActivityFinder componentBox">
        <h3>Activity Finder</h3>
        <label>
          Choose type of activity:
          <select
            value={type}
            onChange={(e) => setType(e.target.value.toLowerCase())}
          >
            {activityTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <div>
          <strong>Suggested Activity: </strong>
          {isLoading ? "Loading..." : activity2}
        </div>
      </div>
    </>
  );
}

export default ActivityFinder;
