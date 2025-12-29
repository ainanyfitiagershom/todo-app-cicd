// ===== APPLICATION TO-DO LIST SIMPLE =====

const todos = [];

// Ajouter une tâche
function addTodo(task) {
  if (!task || task.trim() === "") {
    return false;
  }
  todos.push(task);
  return true;
}

// Supprimer une tâche
function removeTodo(index) {
  if (index < 0 || index >= todos.length) {
    return false;
  }
  todos.splice(index, 1);
  return true;
}

// Lister toutes les tâches
function listTodos() {
  return [...todos];
}

// Compter les tâches
function countTodos() {
  return todos.length;
}

// Vider la liste (pour les tests)
function clearTodos() {
  todos.length = 0;
}

// Exporter les fonctions
module.exports = {
  addTodo,
  removeTodo,
  listTodos,
  countTodos,
  clearTodos
};
