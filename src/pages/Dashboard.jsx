import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Tareas mockeadas para diseñar tranquilos
  const [tasks, setTasks] = useState([
    { _id: '1', title: 'Terminar el Frontend del TP', description: 'Armar las vistas con React y meterle los estilos puros en violeta.', status: 'pending' },
    { _id: '2', title: 'Testear Endpoints en Render', description: 'Verificar con Axios que el login devuelva el JWT correctamente.', status: 'pending' },
    { _id: '3', title: 'Preparar entrega de la UTN', description: 'Subir los últimos cambios limpios a GitHub sin el node_modules.', status: 'pending' }
  ]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Navbar Superior */}
      <nav className="dashboard-nav">
        <h1>UTN Tasks</h1>
        <button className="btn-logout" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </nav>

      {/* Contenido Central */}
      <main className="dashboard-content">
        <div className="content-header">
          <div>
            <h2>Mis Tareas</h2>
            <p>Tenés {tasks.length} tareas pendientes en MongoDB</p>
          </div>
          <button className="btn-add-task">
            + Nueva Tarea
          </button>
        </div>

        {/* Grilla de Tareas */}
        <div className="tasks-grid">
          {tasks.map((task) => (
            <div key={task._id} className="task-card">
              <div>
                <h3 className="task-title">{task.title}</h3>
                <p className="task-desc">{task.description}</p>
              </div>
              
              <div className="task-footer">
                <span className="task-status status-pending"> Pendiente </span>
                <button className="btn-delete-task" title="Eliminar tarea">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}