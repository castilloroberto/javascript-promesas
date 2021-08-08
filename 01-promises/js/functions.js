

export async function makeRequest(endPoint = '',method = 'Get',body) {

    const headers = new Headers()

    if (body) {
        headers.append('Content-Type','application/json')
    }
    const res = await fetch(endPoint,{
        method,
        body,
        headers,
        mode:'cors'
    })

    return res.json() 
}

export function cuadrado(value) {
    
    return new Promise((res,rej)=>{
        
        if (typeof value !== 'number') {
            rej('error de tipo de dato')
        }
        setTimeout(() => {

            res({
                value,
                cuadrado:value*value
            })
            
        }, Math.random() * 2000);
    })
    
}