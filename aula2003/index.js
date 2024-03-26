const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

operation()

function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'o que voce deseja fazer?',
            choices:[
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ]).then((answer) => {
        const action = answer['action']

       if (action == 'Criar conta'){
        createAccount()
       }else if(action === 'Consultar saldo'){
        getAccountBalance()
       }else if(action === 'Depositar'){
        deposit()
       }else if(action === 'Sacar'){
        withdraw()
       }else if(action === 'Sair'){
        console.log(chalk.bgBlue.black('obrigado por usar o Accounts Node!'))
        process.exit()
       }
    })
    
}

function createAccount(){
    console.log(chalk.bgGreen.white('obrigado por utilizar o Accounts Node Bank!'))
    console.log(chalk.green('Vamos criar sua conta agora...'))

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
       {
         name: 'accountName',
        message: 'Entre com nome da sua conta:'
       }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if(accountName === ""){
            console.error('Não e permitido contas com nome vazio')
            operation()
        }

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.error(chalk.bgRed.black(`A conta: ${accountName} ja existe!`))
            console.error(chalk.red('Escolha outro nome:'))

            buildAccount(accountName)
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            `{"balance":0}`,
            function(err){
                console.error(err)
            }

            
        )
        console.info(chalk.bgGreen.white(`Sua conta: ${accountName} foi criada parabens!`))
        console.info(chalk.green('Pode começar a opera-la!'))

        operation()
    })
}

