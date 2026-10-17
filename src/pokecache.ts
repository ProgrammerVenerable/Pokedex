export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor (interval: number) {
    this.#interval = interval; // its in milliseconds
	this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val
    }
    this.#cache.set(key, entry);
  }

  get (key: string) {
    return this.#cache.get(key);
  }

  #reap () {
    this.#cache.forEach((val, key) => {
      if (Date.now() - val.createdAt >= this.#interval) {
        this.#cache.delete(key);
      }
    });
  }

  #startReapLoop(){
    this.#reapIntervalId = setInterval(() => {
      this.#reap()
    }, this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }


}