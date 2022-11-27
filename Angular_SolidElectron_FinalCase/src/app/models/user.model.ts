export class SignupData {
  constructor(
    public name:string = '',
    public email:string = '',
    public password:string = ''
  ) {
    this.email = email;
    this.name = name;
    this.password = password;
    }
}
