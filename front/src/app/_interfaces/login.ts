export interface ILogin {
    id:number,
    nom: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: null | string
}

export interface ISingleUser{
  data: ILogin
}

export interface IDataUser{
  data: ILogin[]
}

export interface ITokenUser{
  id: number,
  nom: string,
  email: string,
  iap?: number,
  exp?: number
}
