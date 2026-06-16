import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Tareas mockeadas
  const [tasks, setTasks] = useState([
    { _id: '1', title: 'Terminar el Frontend del TP', description: 'Armar las vistas con React y meterle los estilos puros en violeta.', status: 'pending' },
    { _id: '2', title: 'Testear Endpoints en Render', description: 'Verificar con Axios que el login devuelva el JWT correctamente.', status: 'pending' },
    { _id: '3', title: 'Preparar entrega de la UTN', description: 'Subir los últimos cambios limpios a GitHub sin el node_modules.', status: 'pending' }
  ]);

  const handleLogout = () => {
    navigate('/login');
  };


  const openCreateModal = () => {
    setEditingTaskId(null); 
    setNewTitle('');
    setNewDescription('');
    setShowModal(true);
  };

  const openEditModal = (task) => {
    setEditingTaskId(task._id);
    setNewTitle(task.title);
    setNewDescription(task.description);
    setShowModal(true);
  };


  const handleSaveTask = (e) => {
    e.preventDefault();
    
    if (editingTaskId) {

      setTasks(tasks.map(task => 
        task._id === editingTaskId 
          ? { ...task, title: newTitle, description: newDescription } 
          : task
      ));
    } else {
      // --- MODO CREACIÓN ---
      const newTask = {
        _id: Date.now().toString(),
        title: newTitle,
        description: newDescription,
        status: 'pending'
      };
      setTasks([newTask, ...tasks]);
    }

    // Limpiamos todo al cerrar
    setNewTitle('');
    setNewDescription('');
    setEditingTaskId(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task._id !== id));
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
   
          <button className="btn-add-task" onClick={openCreateModal}>
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
                <span className="task-status status-pending">Pendiente</span>
                
                {/* Contenedor de acciones agrupadas */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    className="btn-delete-task" 
                    onClick={() => openEditModal(task)}
                    style={{ color: 'var(--primary)', fontWeight: '500' }}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-delete-task" 
                    onClick={() => handleDelete(task._id)}
                    title="Eliminar tarea"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

  
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
         
            <h3>{editingTaskId ? 'Editar Tarea' : 'Nueva Tarea'}</h3>
            
            <form onSubmit={handleSaveTask}>
              <div className="form-group">
                <label htmlFor="taskTitle">Título</label>
                <input 
                  type="text" 
                  id="taskTitle"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="¿Qué hay que hacer?"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="taskDesc">Descripción</label>
                <textarea 
                  id="taskDesc"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Sumá más detalles del trabajo..."
                  required
                />
              </div>

              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-cancel" 
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-add-task">
                  {editingTaskId ? 'Actualizar' : 'Guardar Tarea'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}