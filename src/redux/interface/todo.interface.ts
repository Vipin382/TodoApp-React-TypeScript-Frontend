export interface initialInterface {
  name: string | null;
  password: string | null;
  file: File | null;
}

export interface payloadInterface {
  users: initialInterface;
  status: "idle" | "loading" | "failed";
  error: string | undefined | null;
}

export interface loginPayload {
  username: string;
  password: string;
}
