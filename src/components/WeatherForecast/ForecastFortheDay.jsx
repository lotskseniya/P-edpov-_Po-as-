import "../WeatherForecast/Weather.css";

export const ForecastFortheDay = ({ forecast }) => {
  return (
    <div className="daily-temperature">
      <p className="daily-temperature-header">TODAY`S FORECAST:</p>
      <div>
        <div>
          {forecast.forecastday.slice(0, 1).map((item, index) => (
            <div key={index}>
              <div>
                {item.hour ? (
                  <div key={item.date_epoch} className="daily-hours-forecast">
                    {item.hour.slice(6, 22).filter((el, i) => i % 3 === 0).map((hour, ind) => (
                      <div key={hour.time_epoch} className="daily-hours-forecast-container">
                         <p>{new Date(hour.time).getHours()}:00</p>
                              <img
                                src={hour.condition.icon}
                                alt={hour.condition.text}
                              />
                              <p className="daily-hour-temperature">{hour.temp_c}&deg;</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
