module.exports = {
    switch (op) {
        case '+':
            return ( ${n1} ${op} ${n2} = ${(n1+n2)} )
         '-' :
         case '+':
            return( ${n1} ${op} ${n2} = ${(n1-n2)} )
           case '/':
            return (${n1} ${op} ${n2} = ${(n1/n2)})
            case '*':
            return (${n1} ${op} ${n2} = ${(n1*n2)})
            default:
                return ('invalid operation')
    },
    cientifica(n1, n2, op){
        switch (op){
            case "sr":
                return('Raiz quadrada: ${n1} + ${n2} = ${Math.sqrt(n1+n2)}')
            default:
                return('invalid operation')
        }
    }
}
