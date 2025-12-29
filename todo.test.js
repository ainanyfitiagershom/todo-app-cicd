// ===== TESTS AUTOMATIQUES =====

const { addTodo, removeTodo, listTodos, countTodos, clearTodos } = require('./todo');

let testsTotal = 0;
let testsPassed = 0;

function test(name, fn) {
  testsTotal++;
  try {
    clearTodos(); // Reset avant chaque test
    fn();
    testsPassed++;
    console.log(`✅ PASS: ${name}`);
  } catch (error) {
    console.log(`❌ FAIL: ${name}`);
    console.log(`   Erreur: ${error.message}`);
  }
}

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Attendu: ${expected}, Reçu: ${actual}`);
  }
}

// ===== LES 3 TESTS =====

test("Ajouter une tâche fonctionne", () => {
  const result = addTodo("Faire les courses");
  assertEqual(result, true);
  assertEqual(countTodos(), 1);
});

test("Supprimer une tâche fonctionne", () => {
  addTodo("Tâche à supprimer");
  const result = removeTodo(0);
  assertEqual(result, true);
  assertEqual(countTodos(), 0);
});

test("Ajouter une tâche vide échoue", () => {
  const result = addTodo("");
  assertEqual(result, false);
  assertEqual(countTodos(), 0);
});

// ===== RÉSULTAT FINAL =====

console.log("\n=============================");
console.log(`RÉSULTAT: ${testsPassed}/${testsTotal} tests passés`);
console.log("=============================\n");

if (testsPassed !== testsTotal) {
  process.exit(1); // Échec = code 1 (important pour CI/CD!)
}
