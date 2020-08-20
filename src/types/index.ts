export interface Guest {
  id: number;
  name: string;
  email: string;
  status: 'accepted' | 'declined';
}

export interface Event {
  name: string;
  guestsList: Guest[];
}
