class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
  }

  movePlayer(dir, speed) {
    if (dir == "right") {
      this.x += speed;
    } else if (dir == "left") {
      this.x -= speed;
    } else if (dir == "up") {
      this.y += speed;
    } else if (dir == "down") {
      this.y -= speed;
    }
  }

  collision(item) {
    if (this.x == item.x & this.y == item.y) {
      return true
    }
  }

  calculateRank(arr) {
    const num_players = arr.length;
    let rank = 1;
    for (let player of arr) {
      if (player.score > this.score) {
        rank += 1;
      }
    }
    return `Rank: ${rank}/${num_players}`;
  }
}

export default Player;
