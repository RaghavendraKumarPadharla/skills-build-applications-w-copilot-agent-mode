import { useState } from 'react';

export default function WorkoutSuggestions() {
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      type: 'HIIT Cardio',
      difficulty: 'intermediate',
      duration: 30,
      targetMuscles: ['Cardio', 'Endurance'],
      equipment: ['None'],
      caloriesEstimate: 350,
      description: 'High-intensity interval training to improve cardiovascular fitness and burn calories quickly.',
    },
    {
      id: 2,
      type: 'Strength Training',
      difficulty: 'intermediate',
      duration: 45,
      targetMuscles: ['Chest', 'Back', 'Shoulders'],
      equipment: ['Dumbbells', 'Barbell'],
      caloriesEstimate: 280,
      description: 'Complete upper body workout focusing on compound movements for strength and muscle building.',
    },
    {
      id: 3,
      type: 'Yoga & Flexibility',
      difficulty: 'beginner',
      duration: 40,
      targetMuscles: ['Flexibility', 'Core'],
      equipment: ['Yoga Mat'],
      caloriesEstimate: 150,
      description: 'Relaxing yoga session to improve flexibility and reduce stress after intense workouts.',
    },
    {
      id: 4,
      type: 'Running Program',
      difficulty: 'intermediate',
      duration: 50,
      targetMuscles: ['Legs', 'Cardio'],
      equipment: ['Running Shoes'],
      caloriesEstimate: 500,
      description: 'Steady-state running to build endurance and strengthen lower body muscles.',
    },
    {
      id: 5,
      type: 'Core Strengthening',
      difficulty: 'beginner',
      duration: 20,
      targetMuscles: ['Abs', 'Core'],
      equipment: ['None'],
      caloriesEstimate: 100,
      description: 'Quick core workout to strengthen your abdominal and stabilizer muscles.',
    },
  ]);

  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const handleCompleteWorkout = (id) => {
    if (!completedWorkouts.includes(id)) {
      setCompletedWorkouts((prev) => [...prev, id]);
      alert('Great job! Workout completed! 🎉');
    } else {
      setCompletedWorkouts((prev) => prev.filter((workoutId) => workoutId !== id));
    }
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'success',
      intermediate: 'warning',
      advanced: 'danger',
    };
    return colors[difficulty] || 'secondary';
  };

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="card mb-4">
          <div className="card-header bg-danger text-white">
            <h2 className="mb-0">💪 Personalized Workout Suggestions</h2>
          </div>

          <div className="card-body">
            <p className="lead">
              Based on your activity history and fitness level, here are workouts tailored just for you:
            </p>
          </div>
        </div>

        <div className="row">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="col-lg-12 mb-4">
              <div className={`card ${completedWorkouts.includes(suggestion.id) ? 'border-success' : ''}`}>
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="mb-0">{suggestion.type}</h5>
                    <span className={`badge bg-${getDifficultyColor(suggestion.difficulty)}`}>
                      {suggestion.difficulty.charAt(0).toUpperCase() + suggestion.difficulty.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="card-body">
                  <p className="card-text mb-3">{suggestion.description}</p>

                  <div className="row mb-3">
                    <div className="col-md-3">
                      <strong>Duration:</strong> {suggestion.duration} minutes
                    </div>
                    <div className="col-md-3">
                      <strong>Calories:</strong> ~{suggestion.caloriesEstimate} cal
                    </div>
                    <div className="col-md-6">
                      <strong>Target Muscles:</strong>{' '}
                      {suggestion.targetMuscles.map((muscle) => (
                        <span key={muscle} className="badge bg-info me-1">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-12">
                      <strong>Equipment Needed:</strong>{' '}
                      {suggestion.equipment.map((equip) => (
                        <span key={equip} className="badge bg-secondary me-1">
                          {equip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`btn ${
                      completedWorkouts.includes(suggestion.id) ? 'btn-success' : 'btn-primary'
                    } w-100`}
                    onClick={() => handleCompleteWorkout(suggestion.id)}
                  >
                    {completedWorkouts.includes(suggestion.id)
                      ? '✓ Workout Completed!'
                      : '▶️ Start Workout'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-info mt-4" role="alert">
          <h5 className="alert-heading">💡 How Suggestions Work</h5>
          <p className="mb-0">
            Your workout suggestions are generated based on your current fitness level, recent activity
            history, and personal goals. Complete workouts to earn points and move up the leaderboard!
          </p>
        </div>
      </div>
    </div>
  );
}
