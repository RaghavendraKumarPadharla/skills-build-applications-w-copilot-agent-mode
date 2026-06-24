import { useState, useEffect } from 'react';

export default function StudentProfile() {
  const [student, setStudent] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    fitnessLevel: 'intermediate',
    totalPoints: 450,
    workoutCount: 12,
    joinDate: '2024-01-15',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(student);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setStudent(formData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="card">
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <h2 className="mb-0">📋 Student Profile</h2>
            <button
              className="btn btn-light btn-sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : '✏️ Edit'}
            </button>
          </div>

          <div className="card-body">
            {!isEditing ? (
              <div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name:</label>
                  <p className="form-control-plaintext">{student.name}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email:</label>
                  <p className="form-control-plaintext">{student.email}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Fitness Level:</label>
                  <p className="form-control-plaintext">
                    <span className="badge bg-info text-dark">
                      {student.fitnessLevel.charAt(0).toUpperCase() + student.fitnessLevel.slice(1)}
                    </span>
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Total Points:</label>
                  <p className="form-control-plaintext">
                    <span className="badge bg-warning text-dark">{student.totalPoints} pts</span>
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Workouts Completed:</label>
                  <p className="form-control-plaintext">{student.workoutCount}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Member Since:</label>
                  <p className="form-control-plaintext">{student.joinDate}</p>
                </div>
              </div>
            ) : (
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Fitness Level</label>
                  <select
                    className="form-select"
                    name="fitnessLevel"
                    value={formData.fitnessLevel}
                    onChange={handleInputChange}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSave}
                >
                  ✓ Save Changes
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
