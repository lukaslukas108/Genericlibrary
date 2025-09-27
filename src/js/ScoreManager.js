export default class ScoreManager {
    constructor() {
        this.score = 0;
    }

    addPoints(points) {
        this.score += points;
    }

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }
}