export interface StaticWish {
  id: string;
  senderName: string;
  relationship: string;
  message: string;
}

// Ucapan di bawah adalah contoh statis. Ganti dengan doa terkurasi dari keluarga/sahabat.
export const wishesData: StaticWish[] = [
  {
    id: 'wish-01',
    senderName: 'Keluarga Besar',
    relationship: 'Doa & Restu',
    message: 'Semoga Allah senantiasa melimpahkan berkah atas pernikahan kalian. Jadilah keluarga yang sakinah, mawaddah, dan warahmah. Saling menjaga dalam suka maupun duka.',
  },
  {
    id: 'wish-02',
    senderName: 'Sahabat Tercinta',
    relationship: 'Harapan Baik',
    message: 'Selamat menempuh perjalanan baru bersama. Semoga setiap langkah dipenuhi kebahagiaan, setiap hari dipenuhi rasa syukur, dan cinta kalian tumbuh semakin kuat.',
  },
  {
    id: 'wish-03',
    senderName: 'Kerabat & Saudara',
    relationship: 'Kasih & Doa',
    message: 'Dua hati kini menjadi satu dalam ikatan suci. Semoga rumah tangga kalian menjadi tempat pulang yang paling menenangkan, penuh kasih sayang dan keberkahan.',
  },
];
