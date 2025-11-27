import { Reservation } from '../types';

const STORAGE_KEY = 'hukah_reservations_db_v1';

class LiteDB {
  private getStore(): Reservation[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading from DB', e);
      return [];
    }
  }

  private saveStore(data: Reservation[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to DB', e);
    }
  }

  // Simulate async operation
  async addReservation(reservation: Omit<Reservation, 'id' | 'createdAt'>): Promise<Reservation> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newReservation: Reservation = {
          ...reservation,
          id: crypto.randomUUID(),
          createdAt: Date.now(),
        };
        const current = this.getStore();
        this.saveStore([...current, newReservation]);
        resolve(newReservation);
      }, 800); // Fake network delay
    });
  }

  async getReservations(): Promise<Reservation[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getStore().sort((a, b) => b.createdAt - a.createdAt));
      }, 400);
    });
  }

  async deleteReservation(id: string): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const current = this.getStore();
            this.saveStore(current.filter(r => r.id !== id));
            resolve();
        }, 400);
    })
  }
}

export const db = new LiteDB();