interface book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  isLoanedBool?: boolean;
}
interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  auraeId: number;
  auraeCard: string;
}