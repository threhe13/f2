class TokenStorage {
  private storage: Storage;
  private id: string;

  constructor(id: string) {
    this.storage = localStorage;
    this.id = id;
  }

  setToken(value: string) {
    this.storage.setItem(this.id, value);
  }

  getToken(): string | null {
    return this.storage.getItem(this.id);
  }

  removeToken() {
    this.storage.removeItem(this.id);
  }
}

export default TokenStorage;
