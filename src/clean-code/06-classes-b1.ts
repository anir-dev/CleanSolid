(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User extends Person {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor(
            { email, role }: UserProps,
            { name, gender, birthdate }: PersonProps) {
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            { workingDirectory, lastOpenFolder }: UserSettingProps,
            { email, role }: UserProps,
            { name, gender, birthdate }: PersonProps
        ) {
            super({ email, role }, { name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings(
        {
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home'
        },
        {
            email: 'fernando@google.com',
            role: 'Admin'
        },
        {
            name: 'Fernando',
            gender: 'M',
            birthdate: new Date('1985-10-21')
        }
    );

    // console.log({ userSettings });


})();