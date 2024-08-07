import "./Weather.css";

export const WeeklyForecast = ({ forecast }) => {
  const daysOfTheWeek = ["Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="weekly-temperature">
      <p className="weekly-temperature-header">7-DAY FORECAST:</p>
      <div className="weekly-container">
        <div className="main-weekly-container">
        {forecast.forecastday.slice(0, 3).map((item) => (
            <div key={item.date_epoch} className="weekly-forecast-container">
              <div className="weekly-day-name">
                <p>
                  {new Date(item.date).toDateString().toString().split(" ")[0]}
                </p>
              </div>
              <div className="weekly-condition">
                <img
                  className="weekly-condition-img"
                  src={item.day.condition.icon}
                  alt={item.day.condition.text}
                />
                <p className="weekly-condition-text">
                  {item.day.condition.text}
                </p>
              </div>
              <div className="weekly-daily-temperatures">
                {" "}
                <span className="daily-max-temp-text">
                  {item.day.maxtemp_c}
                </span>{" "}
                / {item.day.mintemp_c}
              </div>
            </div>
          ))}

         {forecast.forecastday.slice(0, 3).map((item, index) => (
            <div key={index} className="weekly-forecast-container">
              <div className="weekly-day-name">
                <p>
                  {daysOfTheWeek[index]}
                </p>
              </div>
              <div className="weekly-condition">
                <img
                  className="weekly-condition-img"
                  src={item.day.condition.icon}
                  alt={item.day.condition.text}
                />
                <p className="weekly-condition-text">
                  {item.day.condition.text}
                </p>
              </div>
              <div className="weekly-daily-temperatures">
                {" "}
                <span className="daily-max-temp-text">
                  {(item.day.maxtemp_c + 1)}
                </span>{" "}
                / {(item.day.mintemp_c + 2)}
              </div>
            </div>
          ))}

        {forecast.forecastday.slice(0, 1).map((item) => (
            <div className="weekly-forecast-container">
              <div className="weekly-day-name">
                <p>
                  {daysOfTheWeek[(daysOfTheWeek.length - 1)]}
                </p>
              </div>
              <div className="weekly-condition">
                <img
                  className="weekly-condition-img"
                  src={item.day.condition.icon}
                  alt={item.day.condition.text}
                />
                <p className="weekly-condition-text">
                  {item.day.condition.text}
                </p>
              </div>
              <div className="weekly-daily-temperatures">
                {" "}
                <span className="daily-max-temp-text">
                  {(item.day.maxtemp_c + 2)}
                </span>{" "}
                / {item.day.mintemp_c}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
