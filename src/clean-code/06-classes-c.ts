;(() => {
  //   Applying single-responsability principle

  type Gender = 'M' | 'F'

  interface PersonProps {
    name: string
    gender: Gender
    birthdate: Date
  }

  class Person {
    public birthdate: Date
    public gender: Gender
    public name: string

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name
      this.gender = gender
      this.birthdate = birthdate
    }
  }

  interface UserProps {
    email: string
    role: string
  }

  class User {
    public email: string
    public lastAccess: Date
    public role: string

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  interface SettingsProps {
    lastOpenFolder: string
    workingDirectory: string
  }

  class Settings {
    public lastOpenFolder: string
    public workingDirectory: string

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder
      this.workingDirectory = workingDirectory
    }
  }

  interface UserSettingsProps {
    birthdate: Date
    name: string
    gender: Gender
    email: string
    role: string
    lastOpenFolder: string
    workingDirectory: string
  }

  class UserSettings {
    public person: Person
    public settings: Settings
    public user: User

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate })
      this.settings = new Settings({ lastOpenFolder, workingDirectory })
      this.user = new User({ email, role })
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date('1985-10-21'),
    email: 'fernando@google.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Fernando',
    role: 'Admin',
    workingDirectory: '/usr/home',
  })

  console.log({ userSettings })
})()
