const grideSizeEl = document.getElementById("gridSize")
const playerSizeEl = document.getElementById("playerCount")
const submit = document.getElementById("subt")

submit.addEventListener("click",function(){
  
  const grideSize = grideSizeEl.value
  const numPlayers =playerSizeEl.value

  let playerStats=[]
  for(let i=1;i<=numPlayers;i++){
    playerStats.push({
      id:i,
      reach:0,
      path:[0],
      rolls:[],
    })
  }
  let maxReach=0
  let maxReachId=-1
  while(maxReach<grideSize*grideSize){

    for(let i=0;i<numPlayers;i++){
      let currtCount=getrandomRoll()

      playerStats[i].rolls.push(currtCount)
      if(playerStats[i].reach==0 && (currtCount != 1 && currtCount != 6)){
        playerStats[i].path.push(0)
      }else{
        const newReach =playerStats[i].reach+currtCount
        if(newReach<=grideSize*grideSize){
          playerStats[i].reach=newReach
          playerStats[i].path.push(newReach)

          if(newReach>maxReach){
          maxReach=newReach
          maxReachId=playerStats[i].id
          }
          if(maxReach==grideSize*grideSize){
          break;
          }
        }else{
        playerStats[i].path.push(playerStats[i].reach)
        }
      }
    }
  }
  console.log(playerStats)
  creatTable(playerStats,maxReachId,numPlayers)
})

function creatTable(playerStats,maxReachId,numPlayers){
 const tableBody= document.getElementById("card-body")
   tableBody.innerHTML=''
   for(let i=0;i<numPlayers;i++){
      const tr = document.createElement("tr")
    
      const tdDiceRoll = document.createElement("td")
      const tdDiceRollHistory = document.createElement("td")
      const tdPositionHistory = document.createElement("td")
      const tdWinnerStatus = document.createElement("td")
      const tdId = document.createElement("td")

      tdId.innerHTML = playerStats[i].id

      const lastDiceRoll = playerStats[i].rolls.length-1
      if(lastDiceRoll>=0)
      tdDiceRoll.innerHTML=playerStats[i].rolls[lastDiceRoll]

      tdDiceRollHistory.innerHTML=playerStats[i].rolls.toString()
      tdPositionHistory.innerHTML=playerStats[i].path.toString()

      if(playerStats[i].id==maxReachId){
        tdWinnerStatus.innerHTML='WINNER'
      }else{
        tdWinnerStatus.innerHTML=''
      }

      tr.appendChild(tdId)
      tr.appendChild(tdDiceRoll)
      tr.appendChild(tdDiceRollHistory)
      tr.appendChild(tdPositionHistory)
      tr.appendChild(tdWinnerStatus)

      tableBody.appendChild(tr)
   }
}

function getrandomRoll(){
  return Math.floor(Math.random()*6+1)
}