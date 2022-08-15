interface IAccountInfo {
  username: string;
  password: string;
  sign_up_code?: string;
}

interface IResponseData {
  data: any;
  code: number;
  message: string;
}

export type { IAccountInfo, IResponseData };
