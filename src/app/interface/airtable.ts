export interface IAirTable {
  records: Record[];
}

export interface Record {
  id: string;
  fields: Fields;
  createdTime: Date;
}

export interface Fields {
  UserName?: any;
  UserID?: any;
  UserRoleId?: any[];
  Status?: any;
  Password?: any;
  OneTimePasswordFlag?: any;
  Passcode?: any;
  UserRoles?: any[];
  CreatedBy?: EdBy;
  LastCreationDate?: Date;
  LastModifiedBy?: EdBy;
  LastModifiedDate?: Date;
}

export interface EdBy {
  id: string;
  email: string;
  name: string;
}
