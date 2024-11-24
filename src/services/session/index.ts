interface SessionData {
    name: string;
    email: string;
    isAdmin: boolean;
  }

export class SessionService {

  public static saveSession({name, email, isAdmin }: SessionData) {
    const session = {
        name,
        email,
        isAdmin
    }
    const session_raw = JSON.stringify(session, null, 2)
    localStorage.setItem('session', session_raw)
  }

  public static getSession() {
    const session_raw = localStorage.getItem('session')
    if(!session_raw){
        return {
            isLogged: false,
            isAdmin: false
        }
    }
    const session = JSON.parse(session_raw)
    return {
        isLogged: true,
        ...session
    }
  }
  public static deleteSession() {
    localStorage.removeItem('session')
  }

}

