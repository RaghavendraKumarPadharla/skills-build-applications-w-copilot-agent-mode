import { useState } from 'react';

export default function Leaderboard() {
  const [timeFrame, setTimeFrame] = useState('week');
  const [leaderboardData, setLeaderboardData] = useState([
    {
      rank: 1,
      name: 'Alex Chen',
      points: 450,
      activities: 12,
      trend: '↑ +50',
    },
    {
      rank: 2,
      name: 'John Doe',
      points: 420,
      activities: 11,
      trend: '↑ +30',
    },
    {
      rank: 3,
      name: 'Sarah Johnson',
      points: 380,
      activities: 10,
      trend: '→ 0',
    },
    {
      rank: 4,
      name: 'Mike Wilson',
      points: 350,
      activities: 9,
      trend: '↓ -20',
    },
    {
      rank: 5,
      name: 'Emma Davis',
      points: 320,
      activities: 8,
      trend: '↑ +10',
    },
    {
      rank: 6,
      name: 'David Brown',
      points: 280,
      activities: 7,
      trend: '↓ -40',
    },
    {
      rank: 7,
      name: 'Lisa Anderson',
      points: 250,
      activities: 6,
      trend: '↑ +20',
    },
    {
      rank: 8,
      name: 'Tom Martinez',
      points: 210,
      activities: 5,
      trend: '→ 0',
    },
  ]);

  const handleTimeFrameChange = (frame) => {
    setTimeFrame(frame);
    // In a real app, this would fetch new data based on the time frame
    alert(`Showing ${frame} leaderboard`);
  };

  const getTrendColor = (trend) => {
    if (trend.includes('↑')) return 'success';
    if (trend.includes('↓')) return 'danger';
    return 'secondary';
  };

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="card">
          <div className="card-header bg-warning text-dark">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="mb-0">🏆 Leaderboard</h2>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn ${timeFrame === 'week' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => handleTimeFrameChange('week')}
                >
                  Week
                </button>
                <button
                  type="button"
                  className={`btn ${timeFrame === 'month' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => handleTimeFrameChange('month')}
                >
                  Month
                </button>
                <button
                  type="button"
                  className={`btn ${timeFrame === 'alltime' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => handleTimeFrameChange('alltime')}
                >
                  All Time
                </button>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="text-center">Rank</th>
                    <th>Name</th>
                    <th className="text-center">Points</th>
                    <th className="text-center">Activities</th>
                    <th className="text-center">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((entry) => (
                    <tr key={entry.rank} className={entry.rank === 1 ? 'table-warning' : ''}>
                      <td className="text-center fw-bold">
                        {entry.rank === 1 && '🥇'}
                        {entry.rank === 2 && '🥈'}
                        {entry.rank === 3 && '🥉'}
                        {entry.rank > 3 && entry.rank}
                      </td>
                      <td className="fw-bold">{entry.name}</td>
                      <td className="text-center">
                        <span className="badge bg-success fs-6">{entry.points}</span>
                      </td>
                      <td className="text-center">{entry.activities}</td>
                      <td className="text-center">
                        <span className={`badge bg-${getTrendColor(entry.trend)}`}>
                          {entry.trend}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-footer bg-light">
            <small className="text-muted">
              💡 Points are earned by completing activities. The more intense your workouts, the more
              points you earn!
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
