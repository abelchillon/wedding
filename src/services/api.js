export async function getFotosCloudinary() {

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';



  const res = await fetch(apiUrl + '/fotos');



  if (!res.ok) throw new Error('No se pudieron obtener las fotos');



  // Si la respuesta no es JSON, lanza error más claro



  const contentType = res.headers.get('content-type');



  if (!contentType || !contentType.includes('application/json')) {

    throw new Error(

      'El backend no responde con JSON. ¿Está el backend levantado y la URL es correcta?'

    );

  }



  return res.json();

}

