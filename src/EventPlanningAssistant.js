import React, { useState, useEffect } from "react";
import axios from "axios";

const EventPlanningAssistant = () => {
  const [userInput, setUserInput] = useState("");
  const [eventIdeas, setEventIdeas] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [venues, setVenues] = useState([]);

  const openaiEndpoint = process.env.REACT_APP_OPENAI_API_KEY; // Replace with your OpenAI API endpoint
  const metaphorEndpoint = process.env.REACT_APP_METAPHOR_API; // Replace with your Metaphor API endpoint

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const generateEventIdeas = async () => {
    try {
      const response = await axios.post(openaiEndpoint, {
        userInput: `Generate event ideas for '${userInput}'`,
      });
      setEventIdeas(response.data.eventIdeas);
    } catch (error) {
      console.error("Error fetching event ideas:", error);
    }
  };

  const suggestVenues = async () => {
    try {
      const response = await axios.post(metaphorEndpoint, {
        event_type: userInput,
        location,
        budget,
      });
      setVenues(response.data.venues.slice(0, 5));
    } catch (error) {
      console.error("Error suggesting venues:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Event Planning Assistant!</h1>
      <label>
        What type of event are you planning?
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
        />
      </label>
      <button onClick={generateEventIdeas}>Generate event ideas</button>

      {eventIdeas && (
        <div>
          <h2>Here are some event ideas:</h2>
          <p>{eventIdeas}</p>
        </div>
      )}

      <label>
        Enter the location for the event:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        What is your budget for the venue?
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </label>
      <button onClick={suggestVenues}>Get venue suggestions</button>

      {venues.length > 0 && (
        <div>
          <h2>Top venue suggestions:</h2>
          <ul>
            {venues.map((venue, index) => (
              <li key={index}>
                {venue.title}, {venue.url}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EventPlanningAssistant;
