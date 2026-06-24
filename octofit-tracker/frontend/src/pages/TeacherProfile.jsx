import { useState } from 'react';

export default function TeacherProfile() {
  const [teacher, setTeacher] = useState({
    name: 'Jane Smith',
    email: 'jane@example.com',
    fitnessLevel: 'advanced',
    specialization: 'Strength Training',
    studentCount: 15,
    joinDate: '2023-06-10',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(teacher);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setTeacher(formData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="card">
          <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
            <h2 className="mb-0">👨‍🏫 Gym Teacher Profile</h2>
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
                  <p className="form-control-plaintext">{teacher.name}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email:</label>
                  <p className="form-control-plaintext">{teacher.email}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Specialization:</label>
                  <p className="form-control-plaintext">
                    <span className="badge bg-primary">{teacher.specialization}</span>
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Fitness Level:</label>
                  <p className="form-control-plaintext">
                    <span className="badge bg-info text-dark">
                      {teacher.fitnessLevel.charAt(0).toUpperCase() + teacher.fitnessLevel.slice(1)}
                    </span>
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Students Under Supervision:</label>
                  <p className="form-control-plaintext">
                    <span className="badge bg-warning text-dark">{teacher.studentCount}</span>
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Member Since:</label>
                  <p className="form-control-plaintext">{teacher.joinDate}</p>
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
                  <label className="form-label">Specialization</label>
                  <input
                    type="text"
                    className="form-control"
                    name="specialization"
                    value={formData.specialization}
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
