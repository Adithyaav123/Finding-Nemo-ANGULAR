import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nemo-game',
  templateUrl: './nemo-game.component.html',
  styleUrls: ['./nemo-game.component.css']
})
export class NemoGameComponent implements OnInit {
  circles: any[] = [];
  nemoCircle: any = null;
  message: string = '';
  attempts: number = 0;
  gameActive: boolean = true;
  nemoFound: boolean = false;

  ngOnInit(): void {
    this.initializeNewGame();
  }

  initializeNewGame() {
    this.circles = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      isNemo: false,
      isClicked: false
    }));
    this.shuffleArray(this.circles);

    this.nemoCircle = this.circles[Math.floor(Math.random() * this.circles.length)];
    this.nemoCircle.isNemo = true;

    this.attempts = 0;
    this.gameActive = true;
    this.message = '';
    this.nemoFound = false;
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleGameResult(isWinner: boolean) {
    this.gameActive = false;
    if (isWinner) {
      this.nemoFound = true;
      this.message = `Congratulations! You found Nemo in ${this.attempts} attempts!`;
    } else {
      this.message = 'Sorry, you lose!';
    }
  }

  circleClickHandler(circle: any) {
    if (!this.gameActive || circle.isClicked) return;

    this.attempts++;
    circle.isClicked = true;

    if (circle.isNemo) {
      this.handleGameResult(true);
    } else if (this.attempts >= 6) {
      this.handleGameResult(false);
    } else {
      this.message = `Sorry, keep looking for Nemo! Attempts remaining: ${6 - this.attempts}`;
    }
  }

  resetGame() {
    this.initializeNewGame();
  }
}