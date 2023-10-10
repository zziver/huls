
playerHealth = 100;
let playerGold = 0;
let playerLevel = 1;
let isGameOver = false;
let playerName = "";
let numberDefeatedEnemies = 0;
const maxPlayerLevel = 5; 
function generateGameLegend(playerName) {
  return `Давным-давно в мире, окутанном тьмой и ужасом, жил молодой воин по имени ${playerName}. Он отправился в долгое и опасное путешествие, чтобы найти древний артефакт, который, как говорят легенды, может уничтожить всех злых демонов и вернуть мир к прежнему состоянию. 
${playerName} был готов ко всем испытаниям, которые ему предстояли на его пути. Его путь был долгим и полным опасностей: он встретил множество врагов, которые хотели остановить его в поисках артефакта. ${playerName} был настолько смелым и умелым воином, что справлялся с каждым врагом на своём пути. 
Однажды он встретил злого короля, который хранил артефакт. В битве с королём, ${playerName} победил и вернул артефакт, и теперь он должен использовать его, чтобы уничтожить всех злых демонов и вернуть мир к прежнему состоянию. 
Теперь ${playerName} отправляется в последнее путешествие, чтобы уничтожить демонов и спасти мир. Его здоровье и богатство помогут ему в этом путешествии, но ему также придётся принимать трудные решения и сражаться в жестоких битвах. Сможет ли ${playerName} победить всех демонов и вернуть мир к прежнему состоянию? Только время покажет.`;
} 
function welcomePlayer() {
  let nameReceived = false;
  while (!nameReceived) {
    const name = prompt("Здравствуй, странник. Как тебя зовут?", "Лучник777");
    if (name === "" || name === null) {
      alert("Вы не ввели имя, попробуйте ещё раз");
    } else {
      const legend = generateGameLegend(playerName);
      alert(`Вы невероятно смелый путник, желаю незабываемых приключений...`);
      alert(legend);
      playerName = name;
      nameReceived = true;
    }
  }
} 
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
function battle() {
  let enemyHealth = getRandomNumber(50, 100);
  alert("Вы сталкиваетесь с врагом, у которого " + enemyHealth + " здоровья!");
  let isPlayerTurn = true; 
  while (playerHealth > 0 && enemyHealth > 0 && !isGameOver) {
    if (isPlayerTurn) {
      let playerDamage = getRandomNumber(5, 15); 
      enemyHealth -= playerDamage; 
      if (enemyHealth <= 0) {
        alert("Вы победили врага!");
        let goldEarned = getRandomNumber(10, 20) * playerLevel;
        alert("Вы заработали " + goldEarned + " золота!");
        playerGold += goldEarned;
        numberDefeatedEnemies++;
        break;
      }
      alert(`
      Вы нанесли врагу ${playerDamage} урона!
      Здоровье врага: ${enemyHealth},
      Ваше здоровье: ${playerHealth}`);
    } else {
      let enemyAttack = getRandomNumber(5, 15);
      playerHealth -= enemyAttack; 
      if (playerHealth <= 0) {
        alert(`Вы были побеждены! Спасибо за игру, ${playerName}`); 
        isGameOver = true;
        break;
      }
      alert(
        `Враг наносит вам ${enemyAttack} урона! \nЗдоровье врага: ${enemyHealth} \nВаше здоровье: ${playerHealth}`
      );
    }
    isPlayerTurn = !isPlayerTurn;
  }
} 
function levelUp() {
  let experienceNeeded = playerLevel * 2;
  if (numberDefeatedEnemies >= experienceNeeded) {
    const gold = getRandomNumber(10, 100);
    playerGold += gold;
    playerLevel++;
    alert(
      `Поздравляем! Вы достигли ${playerLevel} уровня! Бонус за уровень: ${gold} золота`
    );
  }
} 
function gameProcess() {
  while (!isGameOver) {
    alert(`Здоровье игрока: ${playerHealth}, \nЗолото игрока: ${playerGold}`); 
    let choice = prompt(
      "Выберите действие: \nисследовать мир(1), \nвылечиться(2), \nвыйти(3)?",
      playerHealth < 70 ? "2" : "1"
    );
    switch (choice) {
      case "1":
        battle();
        levelUp();
        break;
      case "2":
        let restCost = playerLevel * 10;
        alert(`Стоимость лечения: ${restCost}`);
        if (playerGold >= restCost) {
          playerHealth = 100;
          playerGold -= restCost;
          alert("Вы полностью восстановили здоровье!");
        } else {
          alert("У вас недостаточно золота, чтобы вылечиться.");
        }
        break;
      case "3":
      case null:
        alert(`Спасибо за игру, ${playerName}`);
        isGameOver = true;
        break;
      default:
        alert("Неправильный ввод, попробуйте ещё раз.");
    } 
    if (playerLevel >= maxPlayerLevel) {
      alert("Поздравляем, вы победили! Вы достигли максимального уровня.");
      isGameOver = true;
    }
  }
}
function gameInit() {
  welcomePlayer();
  gameProcess();
} 
gameInit();
