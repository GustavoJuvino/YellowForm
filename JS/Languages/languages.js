// Language Page
const ptBR = {
    login: {
        lng: "PT/ BR",
        fPassword: "Esqueceu a sua senha?",
        btn: "Entrar",
        fregister: "Não tem uma conta existente?",
        span: "Registre-se agora mesmo!",
        user: "Usuário ou Email",
        password: "Senha",
    },
    register: {
        h1: "Crie a sua conta",
        user: "Usuário",
        phone: "Número de telefone",
        cpassword: "Confirme a senha",
        btn: "Criar Conta",
        flogin: "Já tem uma conta existente?",
        span: "Faça o login aqui",
    }
}

const deGE = {
    login:{
        user: "Benutzer oder E-Mail",
        password: "Passwort",
        fPassword: "Haben Sie Ihr Passwort vergessen?",
        btn: "Einloggen",
        fRegister: "Sie haben kein bestehendes Konto?",
        span: "Gleich anmelden",
        lng: "DE/ GE", 

    },
    register: {
        h1: "Erstelle deinen Account",
        user: "Benutzer",
        phone: "Telefonnummer",
        password: "Passwort",
        cPassword: "Bestätigen Sie das Passwort",
        btn: "Ein Konto erstellen",
        fRegister: "Sie haben bereits ein bestehendes Konto?",
        span: "Hier zugreifen"
    },
}

// Errors Messages in some languages
const errorsMsg = {
    en: {
        // Inputs
        i1: "Please fill in this field.",
        i2: "Please fill in a valid email.",
        i3: "Please fill in a valid phone number.",
        i4: "Please fill in a valid password.",
        i5: "Passwords must be the same.",
    },
    pt: {
        i1: "Preencha este campo.",
        i2: "Preencha com um email válido.",
        i3: "Preencha com um número de telefone válido.",
        i4: "Preencha com uma senha válida.",
        i5: "Senhas devem ser iguais.",
    },
    de: {
        i1: "Bitte füllen Sie dieses Feld aus.",
        i2: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        i3: "Bitte geben Sie eine gültige Telefonnummer ein.",
        i4: "Bitte geben Sie ein gültiges Passwort ein.",
        i5: "Passwörter müssen gleich sein.",
    }
}

const errorPassword = {
    en: "The password must contain at least 8 characters and an uppercase letter, a lowercase letter and an symbol $-!",
    pt: "A senha deve conter pelo menos 8 caracteres e uma letra maiúscula, uma minúscula e um símbolo #?@",
    de: "Geben Sie ein Passwort mit 8 Zeichen ein, das 1 Großbuchstaben, 1 Kleinbuchstaben und 1 Symbol enthält ^@&"
}

export {ptBR, deGE, errorsMsg, errorPassword};


