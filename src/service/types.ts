interface IAccountInfo {
  username: string;
  password: string;
  sign_up_code?: string;
}

interface IResponseData {
  data: any;
  errcode: number;
  errmsg: string;
}

export type { IAccountInfo, IResponseData };
