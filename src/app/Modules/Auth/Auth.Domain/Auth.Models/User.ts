export class User 
{
  id!: number;
  userName!: string;
  role!: string;
  userpassword?: string;
  nomPrenomArb!: string;
  accountStatus!: boolean;
}

export class PasswordUpdate 
{
  id!: number;
  userName!: string;
  oldPassword!: string;
  newPassword!: string;
}

