import { DatePipe } from "@angular/common";

let pipeFecha = new DatePipe('en-US');

export function getJsonFecha(valor: any) {
    if(valor != null){
        let fecha = new Date(valor);
        return {
            day: fecha.getDate(),
            month: fecha.getMonth() + 1,
            year: fecha.getFullYear()
        }
    }
}

export function getDateFecha(valor: any): Date {
    if (valor != null) {
        return new Date(valor.year, valor.month - 1, valor.day)
    }
    return null;
}

export function getDateFechaHora(valorFecha: any, valorHora: any): Date {
    let completa: Date;
    if (valorFecha != null) {
        completa = new Date(valorFecha.year, valorFecha.month - 1, valorFecha.day);
    }
    if (valorHora != null) {
        if (completa == null)
            completa = new Date();
        completa.setMinutes(valorHora.minute)
        completa.setHours(valorHora.hour)
    }
    return completa;
}

export function getJsonHora(valorHora: any) {
    if(valorHora != null){
        let fecha = new Date(valorHora);
        return {
            minute: fecha.getMinutes(),
            hour: fecha.getHours()
        }
    }
}

export function getFechaString(valor: any) {
    if (valor != null) {
        let fecha = new Date(valor.year, valor.month - 1, valor.day)
        return pipeFecha.transform(fecha, 'yyyy-MM-dd');
    }

}