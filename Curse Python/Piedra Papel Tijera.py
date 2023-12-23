#Prueba GitHub!
#Ocultar salida en consola
from getpass import getpass as input

print("E P I C    🪨 📄 ✂️    B A T T L E  ONLY CAPS")
print()

score_player_1 = 0
score_player_2 = 0

while score_player_1 <= 3 or score_player_2 <= 3:
  

  player_1 = input("Player1, select your move R🪨,P📄,S✂️ ")
  player_2 = input("Player2, select your move R🪨,P📄,S✂️ ")

  
  if player_1 == "R" and player_2 == "R":
    print("TIE, both players selected ROCK")
  elif player_1 == "P" and player_2 == "P":
    print("TIE, both players selected PAPER")
  elif player_1 == "S" and player_2 == "S":
    print("TIE, both players selected SCISSORS")
  elif player_1 == "R" and player_2 == "P":
    score_player_2 += 1
    print("Paper wins over Rock, Player 2 wins!")
    print(score_player_2)
  elif player_1 == "P" and player_2 == "S":
    score_player_2 += 1
    print("Scissors wins over Paper, Player 2 wins!")
  elif player_1 == "S" and player_2 == "R":
    score_player_2 += 1
    print("Rock wins over Scissors, Player 2 wins!")
  elif player_1 == "R" and player_2 == "S":
    score_player_1 += 1
    print(score_player_1)
    print("Rock wins over scissors, Player 1 wins!")
  elif player_1 == "S" and player_2 == "P":
    score_player_1 += 1
    print("Scissors wins over Paper , Player 1 wins!")
  elif player_1 == "P" and player_2 == "R":
    score_player_1 += 1
    print("Paper wins over Rock, Player 1 wins!")
  if score_player_1 == 3 or score_player_2 == 3 :
   print("You win the tournament with a score : " , score_player_1 , " vs " , score_player_2)
  
  elif score_player_1 != 3 or score_player_2 != 3:
    continue
  else : 
    print("Try to  do a correct move")
   




   

  