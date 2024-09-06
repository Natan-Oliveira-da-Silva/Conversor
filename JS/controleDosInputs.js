function validaEntrada(entrada){
    entrada = entrada.replace(/[^0-9.]/g, '');
    const parts = entrada.split('.');
    if (parts.length > 2) {
        entrada = parts[0] + '.' + parts.slice(1).join('');
    }
    if (parts[1] && parts[1].length > 2) {
        parts[1] = parts[1].slice(0, 2);
        entrada = parts.join('.');
    }
    return entrada;
}