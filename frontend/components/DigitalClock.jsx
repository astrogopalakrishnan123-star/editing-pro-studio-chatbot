import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [selectedTimezones, setSelectedTimezones] = useState([
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
  ]);

  const timezones = [
    // North America
    { name: 'New York', id: 'America/New_York', offset: -5 },
    { name: 'Los Angeles', id: 'America/Los_Angeles', offset: -8 },
    { name: 'Chicago', id: 'America/Chicago', offset: -6 },
    { name: 'Denver', id: 'America/Denver', offset: -7 },
    { name: 'Toronto', id: 'America/Toronto', offset: -5 },
    { name: 'Mexico City', id: 'America/Mexico_City', offset: -6 },

    // Europe
    { name: 'London', id: 'Europe/London', offset: 0 },
    { name: 'Paris', id: 'Europe/Paris', offset: 1 },
    { name: 'Berlin', id: 'Europe/Berlin', offset: 1 },
    { name: 'Amsterdam', id: 'Europe/Amsterdam', offset: 1 },
    { name: 'Madrid', id: 'Europe/Madrid', offset: 1 },
    { name: 'Rome', id: 'Europe/Rome', offset: 1 },
    { name: 'Istanbul', id: 'Europe/Istanbul', offset: 3 },
    { name: 'Moscow', id: 'Europe/Moscow', offset: 3 },

    // Asia
    { name: 'Dubai', id: 'Asia/Dubai', offset: 4 },
    { name: 'New Delhi', id: 'Asia/Kolkata', offset: 5.5 },
    { name: 'Bangkok', id: 'Asia/Bangkok', offset: 7 },
    { name: 'Hong Kong', id: 'Asia/Hong_Kong', offset: 8 },
    { name: 'Shanghai', id: 'Asia/Shanghai', offset: 8 },
    { name: 'Tokyo', id: 'Asia/Tokyo', offset: 9 },
    { name: 'Seoul', id: 'Asia/Seoul', offset: 9 },
    { name: 'Singapore', id: 'Asia/Singapore', offset: 8 },

    // Oceania
    { name: 'Sydney', id: 'Australia/Sydney', offset: 10 },
    { name: 'Melbourne', id: 'Australia/Melbourne', offset: 10 },
    { name: 'Auckland', id: 'Pacific/Auckland', offset: 12 },

    // Africa
    { name: 'Cairo', id: 'Africa/Cairo', offset: 2 },
    { name: 'Lagos', id: 'Africa/Lagos', offset: 1 },
    { name: 'Johannesburg', id: 'Africa/Johannesburg', offset: 2 },

    // South America
    { name: 'São Paulo', id: 'America/Sao_Paulo', offset: -3 },
    { name: 'Buenos Aires', id: 'America/Argentina/Buenos_Aires', offset: -3 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeInTimezone = (timezoneId) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezoneId,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      return formatter.format(time);
    } catch (error) {
      return 'Invalid';
    }
  };

  const getDateInTimezone = (timezoneId) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezoneId,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
      });
      return formatter.format(time);
    } catch (error) {
      return 'Invalid';
    }
  };

  const toggleTimezone = (timezoneId) => {
    setSelectedTimezones((prev) =>
      prev.includes(timezoneId)
        ? prev.filter((tz) => tz !== timezoneId)
        : [...prev, timezoneId]
    );
  };

  const getTimezoneCity = (timezoneId) => {
    return timezones.find((tz) => tz.id === timezoneId)?.name || timezoneId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Clock className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className="text-4xl font-bold text-white">Global Time Zone Clock</h1>
        </div>

        {/* Current Time Display */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 shadow-2xl">
          <div className="text-center">
            <p className="text-blue-100 text-lg mb-2">Your Local Time</p>
            <p className="text-6xl font-mono font-bold text-white tracking-wide">
              {time.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
              })}
            </p>
            <p className="text-blue-100 mt-4 text-lg">
              {time.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Timezone Selection */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Select Time Zones</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {timezones.map((tz) => (
              <button
                key={tz.id}
                onClick={() => toggleTimezone(tz.id)}
                className={`p-3 rounded-lg font-medium transition-all duration-200 border ${
                  selectedTimezones.includes(tz.id)
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {tz.name}
              </button>
            ))}
          </div>
        </div>

        {/* Clock Displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedTimezones.map((timezoneId) => (
            <div
              key={timezoneId}
              className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 border border-slate-600 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Clock Circle */}
              <div className="relative w-full aspect-square mb-4 bg-slate-900 rounded-full border-4 border-blue-500 shadow-inner">
                {/* SVG Clock */}
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  {/* Clock center circle */}
                  <circle cx="100" cy="100" r="90" fill="#1e293b" stroke="#64748b" strokeWidth="2" />

                  {/* Hour markers */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30) * (Math.PI / 180);
                    const x1 = 100 + 80 * Math.sin(angle);
                    const y1 = 100 - 80 * Math.cos(angle);
                    const x2 = 100 + 85 * Math.sin(angle);
                    const y2 = 100 - 85 * Math.cos(angle);
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#94a3b8"
                        strokeWidth="2"
                      />
                    );
                  })}

                  {/* Calculate hand angles */}
                  {(() => {
                    const formatter = new Intl.DateTimeFormat('en-US', {
                      timeZone: timezoneId,
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: false,
                    });
                    const timeStr = formatter.format(time);
                    const [hours, minutes, seconds] = timeStr.split(':').map(Number);

                    const secondAngle = (seconds * 6) * (Math.PI / 180);
                    const minuteAngle = ((minutes + seconds / 60) * 6) * (Math.PI / 180);
                    const hourAngle = (((hours % 12) + minutes / 60) * 30) * (Math.PI / 180);

                    return (
                      <>
                        {/* Hour hand */}
                        <line
                          x1="100"
                          y1="100"
                          x2={100 + 45 * Math.sin(hourAngle)}
                          y2={100 - 45 * Math.cos(hourAngle)}
                          stroke="#3b82f6"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                        {/* Minute hand */}
                        <line
                          x1="100"
                          y1="100"
                          x2={100 + 65 * Math.sin(minuteAngle)}
                          y2={100 - 65 * Math.cos(minuteAngle)}
                          stroke="#60a5fa"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        {/* Second hand */}
                        <line
                          x1="100"
                          y1="100"
                          x2={100 + 70 * Math.sin(secondAngle)}
                          y2={100 - 70 * Math.cos(secondAngle)}
                          stroke="#ef4444"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </>
                    );
                  })()}

                  {/* Center dot */}
                  <circle cx="100" cy="100" r="5" fill="#3b82f6" />
                </svg>
              </div>

              {/* Digital Time */}
              <div className="text-center">
                <p className="text-xl font-bold text-white mb-2">
                  {getTimezoneCity(timezoneId)}
                </p>
                <p className="text-3xl font-mono font-bold text-blue-400 mb-2">
                  {getTimeInTimezone(timezoneId)}
                </p>
                <p className="text-sm text-slate-400">
                  {getDateInTimezone(timezoneId)}
                </p>
              </div>

              {/* Remove button */}
              <button
                onClick={() => toggleTimezone(timezoneId)}
                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {selectedTimezones.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-400">No time zones selected</p>
            <p className="text-slate-500 mt-2">Select time zones from above to display clocks</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>⏰ Real-time global clock display • Updates every second</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
