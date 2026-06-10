import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './layouts/Layout';
import Loading from './components/common/Loading';

// Lazy load páginas
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const HomeWorkouts = lazy(() => import('./pages/workouts/HomeWorkouts'));
const GymWorkouts = lazy(() => import('./pages/workouts/GymWorkouts'));
const WorkoutDetail = lazy(() => import('./pages/workouts/WorkoutDetail'));
const Nutrition = lazy(() => import('./pages/nutrition/Nutrition'));
const Goals = lazy(() => import('./pages/goals/Goals'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const Education = lazy(() => import('./pages/education/Education'));

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Rotas públicas */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Rotas privadas */}
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/home-workouts" element={<HomeWorkouts />} />
                <Route path="/gym-workouts" element={<GymWorkouts />} />
                <Route path="/workout/:id" element={<WorkoutDetail />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/education" element={<Education />} />
              </Route>

              {/* Página 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
