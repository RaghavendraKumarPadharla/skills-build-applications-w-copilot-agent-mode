import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="card mb-4">
          <div className="card-body text-center">
            <h1 className="card-title mb-4">🏋️ Welcome to OctoFit Tracker</h1>
            <p className="card-text lead">
              Track your fitness journey, join teams, compete on leaderboards, and get personalized workout suggestions.
            </p>

            <div className="row mt-5">
              <div className="col-md-6 mb-3">
                <Link to="/student-profile" className="btn btn-primary btn-lg w-100">
                  👤 View Profile
                </Link>
              </div>
              <div className="col-md-6 mb-3">
                <Link to="/log-activity" className="btn btn-success btn-lg w-100">
                  ➕ Log Activity
                </Link>
              </div>
              <div className="col-md-6 mb-3">
                <Link to="/teams" className="btn btn-info btn-lg w-100">
                  👥 Teams
                </Link>
              </div>
              <div className="col-md-6 mb-3">
                <Link to="/leaderboard" className="btn btn-warning btn-lg w-100">
                  🏆 Leaderboard
                </Link>
              </div>
              <div className="col-md-6 mb-3">
                <Link to="/workouts" className="btn btn-danger btn-lg w-100">
                  💪 Workout Tips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
