export interface TaskInterface {
  id: string;
  task: string;
  completed: string;
  createdAt: string;
  updatedAt: string;
}

export interface TokenInterface {
  message: string;
  status: "idle" | "failed" | "loading";
  username: string;
  profile: string;
  profileType: string;
  profileId: string;
  userId: string;
  task: TaskInterface[];
}

export interface TaskPayload {
  accessToken: string;
  notes: string;
}

export interface TaskUpdatePayloadInterface {
  accessToken: string;
  completed: boolean;
  notes: string;
  id: string;
}

export interface DeleteTaskInterface {
  accessToken: string;
  id: string;
}

export interface usernameUpdateInterface {
  accessToken: string;
  id: string;
  username: string;
}

export interface photoUpdateInterface {
  id: string;
  accessToken: string;
  file: File;
}

export interface videoUpdateInterface {
  id: string;
  accessToken: string;
  url: string;
  type: string;
}
