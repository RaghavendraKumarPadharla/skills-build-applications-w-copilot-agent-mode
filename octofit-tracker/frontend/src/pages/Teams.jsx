import { useState } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: 'Fitness Warriors',
      leader: 'John Doe',
      members: 5,
      totalPoints: 1250,
      joined: true,
    },
    {
      id: 2,
      name: 'Marathon Runners',
      leader: 'Sarah Johnson',
      members: 8,
      totalPoints: 2100,
      joined: false,
    },
    {
      id: 3,
      name: 'Strength Builders',
      leader: 'Mike Wilson',
      members: 6,
      totalPoints: 1800,
      joined: false,
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');

  const handleCreateTeam = (e) => {
    e.preventDefault();
    if (!newTeamName.trim()) {
      alert('Please enter a team name');
      return;
    }

    const team = {
      id: teams.length + 1,
      name: newTeamName,
      leader: 'Current User',
      members: 1,
      totalPoints: 0,
      joined: true,
    };

    setTeams((prev) => [team, ...prev]);
    setNewTeamName('');
    setShowCreateForm(false);
    alert('Team created successfully!');
  };

  const handleJoinTeam = (teamId) => {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === teamId
          ? { ...team, members: team.members + 1, joined: true }
          : team
      )
    );
    alert('Joined team successfully!');
  };

  const handleLeaveTeam = (teamId) => {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === teamId
          ? { ...team, members: Math.max(1, team.members - 1), joined: false }
          : team
      )
    );
    alert('Left team successfully!');
  };

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="mb-4">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {showCreateForm ? '✕ Cancel' : '➕ Create New Team'}
          </button>
        </div>

        {showCreateForm && (
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Create a New Team</h5>
              <form onSubmit={handleCreateTeam}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Team Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                    placeholder="Enter team name"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  ✓ Create Team
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="row">
          {teams.map((team) => (
            <div key={team.id} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-header bg-info text-white">
                  <h5 className="mb-0">👥 {team.name}</h5>
                </div>
                <div className="card-body">
                  <p className="mb-2">
                    <strong>Leader:</strong> {team.leader}
                  </p>
                  <p className="mb-2">
                    <strong>Members:</strong>{' '}
                    <span className="badge bg-primary">{team.members}</span>
                  </p>
                  <p className="mb-3">
                    <strong>Total Points:</strong>{' '}
                    <span className="badge bg-success">{team.totalPoints} pts</span>
                  </p>
                  {team.joined ? (
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => handleLeaveTeam(team.id)}
                    >
                      👋 Leave Team
                    </button>
                  ) : (
                    <button
                      className="btn btn-success w-100"
                      onClick={() => handleJoinTeam(team.id)}
                    >
                      ➕ Join Team
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
