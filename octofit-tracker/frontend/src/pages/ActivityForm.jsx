import { useState } from 'react';

export default function ActivityForm() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: 'running',
      duration: 30,
      calories: 300,
      intensity: 'high',
      date: '2024-06-23',
      points: 30,
    },
  ]);

  const [formData, setFormData] = useState({
    type: 'running',
    duration: '',
    calories: '',
    intensity: 'medium',
  });

  const activityTypes = [
    'running',
    'cycling',
    'swimming',
    'strength_training',
    'yoga',
    'cardio',
    'sports',
    'other',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'duration' || name === 'calories' ? parseInt(value) || '' : value,
    }));
  };

  const calculatePoints = () => {
    const durationFactor = formData.duration || 0;
    const intensityMultiplier = { low: 0.5, medium: 1, high: 1.5 }[formData.intensity];
    return Math.round(durationFactor * intensityMultiplier);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.duration || !formData.calories) {
      alert('Please fill in all required fields');
      return;
    }

    const newActivity = {
      id: activities.length + 1,
      ...formData,
      points: calculatePoints(),
      date: new Date().toISOString().split('T')[0],
    };

    setActivities((prev) => [newActivity, ...prev]);
    setFormData({
      type: 'running',
      duration: '',
      calories: '',
      intensity: 'medium',
    });

    alert('Activity logged successfully! You earned ' + newActivity.points + ' points!');
  };

  const getIntensityBadge = (intensity) => {
    const colors = { low: 'info', medium: 'warning', high: 'danger' };
    return colors[intensity] || 'secondary';
  };

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h2 className="mb-0">➕ Log Your Activity</h2>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Activity Type</label>
                <select
                  className="form-select"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  {activityTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.replace('_', ' ').toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Duration (minutes)</label>
                <input
                  type="number"
                  className="form-control"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 30"
                  min="1"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Calories Burned</label>
                <input
                  type="number"
                  className="form-control"
                  name="calories"
                  value={formData.calories}
                  onChange={handleInputChange}
                  placeholder="e.g., 300"
                  min="0"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Intensity Level</label>
                <select
                  className="form-select"
                  name="intensity"
                  value={formData.intensity}
                  onChange={handleInputChange}
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="alert alert-info" role="alert">
                <strong>Points Earned:</strong> {calculatePoints()} points
              </div>

              <button type="submit" className="btn btn-success w-100">
                ✓ Log Activity
              </button>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-header bg-info text-white">
            <h3 className="mb-0">📊 Recent Activities</h3>
          </div>

          <div className="card-body">
            {activities.length === 0 ? (
              <p className="text-muted">No activities logged yet. Start by logging your first activity!</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Duration</th>
                      <th>Calories</th>
                      <th>Intensity</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((activity) => (
                      <tr key={activity.id}>
                        <td>{activity.date}</td>
                        <td>{activity.type.replace('_', ' ').toUpperCase()}</td>
                        <td>{activity.duration} min</td>
                        <td>{activity.calories} cal</td>
                        <td>
                          <span className={`badge bg-${getIntensityBadge(activity.intensity)}`}>
                            {activity.intensity.charAt(0).toUpperCase() + activity.intensity.slice(1)}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-success">{activity.points} pts</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
