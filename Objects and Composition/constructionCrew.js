function constructionCrew(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrates += 0.1 * worker.experience * worker.weight;
        worker.dizziness = false;
    }
    return worker;
}